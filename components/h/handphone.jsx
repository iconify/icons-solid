import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/u88azubze.css';
import '../../css/q/q1zow2bqk.css';
import '../../css/r/r124wd01y.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="u88azubze"/><path class="q1zow2bqk"/><path class="r124wd01y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:handphone"} {...others} />);
}

export default Component;
