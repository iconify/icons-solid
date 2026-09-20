import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4y2ht2do.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d4y2ht2do"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:clapperboard-outline"} {...others} />);
}

export default Component;
