import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/o9z9o3dpe.css';
import '../../css/j/jbnjxnlrb.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="o9z9o3dpe"/><path class="jbnjxnlrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:gallery-collections"} {...others} />);
}

export default Component;
