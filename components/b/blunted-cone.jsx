import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/g9jq30rox.css';
import '../../css/r/rkzp9kwbv.css';
import '../../css/m/mi9-umnto.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="g9jq30rox"/><path class="rkzp9kwbv"/><path class="mi9-umnto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:blunted-cone"} {...others} />);
}

export default Component;
