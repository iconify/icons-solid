import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/e0zp63bkd.css';
import '../../css/e/ealpwmh-w.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="e0zp63bkd"/><path class="ealpwmh-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:double-right-sign"} {...others} />);
}

export default Component;
