import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yubgi-0bi.css';
import '../../css/e/e_ce5r8oh.css';
import '../../css/e/ehhfdwnok.css';
import '../../css/i/i3j_-xb4h.css';
import '../../css/b/bd20qcbyz.css';
import '../../css/m/mzve6i0yk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yubgi-0bi"/><path class="e_ce5r8oh"/><path class="ehhfdwnok"/><path class="i3j_-xb4h"/><path class="bd20qcbyz"/><path class="mzve6i0yk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:spaghetti"} {...others} />);
}

export default Component;
