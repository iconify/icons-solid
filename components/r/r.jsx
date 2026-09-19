import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/iuoxlbdlv.css';
import '../../css/j/j3jueu2yb.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="iuoxlbdlv"/><path class="j3jueu2yb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:r"} {...others} />);
}

export default Component;
