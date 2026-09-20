import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/sgtrhfkvg.css';
import '../../css/s/sri2uibjc.css';
import '../../css/o/og4f_ccrw.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="sgtrhfkvg"/><path class="sri2uibjc"/><path class="og4f_ccrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:pantone"} {...others} />);
}

export default Component;
