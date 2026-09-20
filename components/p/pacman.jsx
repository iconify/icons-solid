import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tmgj_kpmh.css';
import '../../css/f/f-dxx_b_g.css';
import '../../css/f/f5gkp-bol.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tmgj_kpmh"/><path class="f-dxx_b_g"/><path class="f5gkp-bol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pacman"} {...others} />);
}

export default Component;
