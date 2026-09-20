import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_bseyb6n.css';
import '../../css/a/aupk9b4ty.css';
import '../../css/f/fbs5-_pyz.css';
import '../../css/r/rk1tazbgx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="q_bseyb6n"/><path class="aupk9b4ty"/><path class="fbs5-_pyz"/><path class="rk1tazbgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:justice-scale-1"} {...others} />);
}

export default Component;
