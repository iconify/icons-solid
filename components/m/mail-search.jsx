import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dv-g7mbyv.css';
import '../../css/q/q_akygbwy.css';
import '../../css/n/nmg90_b5o.css';
import '../../css/b/b9eijfewy.css';
import '../../css/e/ej9k9gb1i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dv-g7mbyv"/><path class="q_akygbwy"/><path class="nmg90_b5o"/><path class="b9eijfewy"/><path class="ej9k9gb1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:mail-search"} {...others} />);
}

export default Component;
