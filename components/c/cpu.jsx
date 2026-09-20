import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hqaiz9bbn.css';
import '../../css/i/iutt_t9mp.css';
import '../../css/r/r124wd01y.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="hqaiz9bbn"/><path class="iutt_t9mp"/><path class="r124wd01y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:cpu"} {...others} />);
}

export default Component;
