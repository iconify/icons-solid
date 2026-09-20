import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mnjg11blx.css';
import '../../css/e/eedwr6bsz.css';
import '../../css/m/mfs0ozzcb.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="mnjg11blx"/><path class="eedwr6bsz"/><path class="mfs0ozzcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:lock-circle"} {...others} />);
}

export default Component;
