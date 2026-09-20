import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce2nh6fuo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ce2nh6fuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:post-outline"} {...others} />);
}

export default Component;
