import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls6_xn_4i.css';
import '../../css/x/xykemkb8v.css';
import '../../css/s/st89ppb6y.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ls6_xn_4i"><path class="xykemkb8v"/><path class="st89ppb6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:log"} {...others} />);
}

export default Component;
