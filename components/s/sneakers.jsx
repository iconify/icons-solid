import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fu60b0tdl.css';
import '../../css/k/kqsxv9b-j.css';
import '../../css/m/mkyvb_baj.css';
import '../../css/m/mo-1u7buy.css';
import '../../css/q/qyrmtrb1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fu60b0tdl"/><path class="kqsxv9b-j"/><path class="mkyvb_baj"/><path class="mo-1u7buy"/><path class="qyrmtrb1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:sneakers"} {...others} />);
}

export default Component;
