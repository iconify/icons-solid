import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4h0e5b5l.css';
import '../../css/k/kg8tmobne.css';
import '../../css/j/jwk4qhbzt.css';
import '../../css/n/nmdlyjmlz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="f4h0e5b5l"/><path class="kg8tmobne"/><path class="jwk4qhbzt"/><path class="nmdlyjmlz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:last-quarter-moon"} {...others} />);
}

export default Component;
