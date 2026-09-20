import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/fnceh4_bl.css';
import '../../css/e/e8lqdmbac.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="fnceh4_bl"/><path class="e8lqdmbac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:clipboard-delete-2"} {...others} />);
}

export default Component;
