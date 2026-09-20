import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxpd0srql.css';
import '../../css/d/d1-j72ddq.css';
import '../../css/u/unx-l_b7d.css';
import '../../css/j/jbc_2sbjn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bxpd0srql"/><path class="d1-j72ddq"/><path class="unx-l_b7d"/><path class="jbc_2sbjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:reduced-inequalities"} {...others} />);
}

export default Component;
