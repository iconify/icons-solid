import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hus16pvob.css';
import '../../css/z/z8mm0uzii.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="hus16pvob"/><path class="z8mm0uzii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:signal-2"} {...others} />);
}

export default Component;
