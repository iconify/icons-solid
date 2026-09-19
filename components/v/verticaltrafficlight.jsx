import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2pyog4kx.css';
import '../../css/o/ohp7jwbte.css';
import '../../css/g/gpo5ymbzw.css';
import '../../css/b/brmhlbcwo.css';
import '../../css/a/an7v3cwuk.css';
import '../../css/g/g6bb9vgms.css';
import '../../css/d/dt32v5bir.css';
import '../../css/f/f1z022b5c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j2pyog4kx"/><circle class="ohp7jwbte"/><circle class="gpo5ymbzw"/><circle class="brmhlbcwo"/><path class="an7v3cwuk"/><path class="g6bb9vgms"/><path class="dt32v5bir"/><path class="f1z022b5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:verticaltrafficlight"} {...others} />);
}

export default Component;
