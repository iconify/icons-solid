import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nm4_sebsi.css';
import '../../css/m/mrh53gb6y.css';
import '../../css/s/szwkwybqi.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="nm4_sebsi"/><path class="mrh53gb6y"/><path class="szwkwybqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:money-3"} {...others} />);
}

export default Component;
