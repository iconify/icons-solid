import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnkn5nb4l.css';
import '../../css/y/yytmiewvb.css';
import '../../css/x/xt121f3ic.css';
import '../../css/v/vhm2djnqg.css';
import '../../css/d/d3co6xbya.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cnkn5nb4l"><path class="yytmiewvb"/><path class="xt121f3ic"/><path class="vhm2djnqg"/><path class="d3co6xbya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:javascript-react"} {...others} />);
}

export default Component;
