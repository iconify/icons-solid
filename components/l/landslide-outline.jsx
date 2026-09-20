import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1ekh8bpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z1ekh8bpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:landslide-outline"} {...others} />);
}

export default Component;
