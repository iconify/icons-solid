import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls6_xn_4i.css';
import '../../css/m/m26d08bnp.css';
import '../../css/s/sxmz7tbxf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ls6_xn_4i"><path class="m26d08bnp"/><path class="sxmz7tbxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:text"} {...others} />);
}

export default Component;
