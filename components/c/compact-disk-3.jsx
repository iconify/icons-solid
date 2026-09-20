import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pzl8bxbfn.css';
import '../../css/h/hus16pvob.css';
import '../../css/a/a4lo4k5_r.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="pzl8bxbfn"/><path class="hus16pvob"/><path class="a4lo4k5_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:compact-disk-3"} {...others} />);
}

export default Component;
