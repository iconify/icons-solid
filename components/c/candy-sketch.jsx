import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wfo5e4vzc.css';
import '../../css/t/tnmupxbzr.css';
import '../../css/t/td21-u-yi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wfo5e4vzc"/><path class="tnmupxbzr"/><path class="td21-u-yi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:candy-sketch"} {...others} />);
}

export default Component;
