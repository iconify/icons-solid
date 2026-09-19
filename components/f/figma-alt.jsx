import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6uj5ccbk.css';
import '../../css/v/vod56msze.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w6uj5ccbk"/><path class="vod56msze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:figma-alt"} {...others} />);
}

export default Component;
