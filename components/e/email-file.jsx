import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/l/l1pj7ac9y.css';
import '../../css/e/emifrh09k.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="l1pj7ac9y"/><path class="emifrh09k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:email-file"} {...others} />);
}

export default Component;
