import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fx9m6uqcj.css';
import '../../css/x/xq50ggbfl.css';
import '../../css/h/hiqlpgbhr.css';
import '../../css/m/mjpgeqf0d.css';
import '../../css/t/tug4xk1-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fx9m6uqcj"/><path class="xq50ggbfl"/><path class="hiqlpgbhr wm-k"/><path class="mjpgeqf0d"/><path class="tug4xk1-f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-minus-sketch"} {...others} />);
}

export default Component;
