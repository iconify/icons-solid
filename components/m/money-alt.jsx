import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nm4_sebsi.css';
import '../../css/q/qbbcu_hsg.css';
import '../../css/r/rp6_zw-7u.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="nm4_sebsi"/><path class="qbbcu_hsg"/><path class="rp6_zw-7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:money-alt"} {...others} />);
}

export default Component;
