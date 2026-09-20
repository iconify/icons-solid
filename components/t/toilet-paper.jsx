import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/is73mv3sa.css';
import '../../css/i/iu5k3lbda.css';
import '../../css/b/bql__rbzk.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="is73mv3sa"/><path class="iu5k3lbda"/><path class="bql__rbzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:toilet-paper"} {...others} />);
}

export default Component;
