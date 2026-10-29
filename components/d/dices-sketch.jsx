import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cdz3knbtf.css';
import '../../css/j/ju1tlcb7y.css';
import '../../css/x/xjht12--e.css';
import '../../css/c/c_por8bml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cdz3knbtf"/><path class="ju1tlcb7y wm-a"/><path class="wm-k xjht12--e"/><path class="c_por8bml wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dices-sketch"} {...others} />);
}

export default Component;
