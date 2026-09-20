import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/ki1ly-b8p.css';
import '../../css/l/ld54_pb1a.css';
import '../../css/r/r-kj38pzt.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="ki1ly-b8p"/><path class="ld54_pb1a"/><path class="r-kj38pzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:warning-alt"} {...others} />);
}

export default Component;
