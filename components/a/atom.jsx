import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hus16pvob.css';
import '../../css/a/auf21d9tc.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="hus16pvob"/><path class="auf21d9tc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:atom"} {...others} />);
}

export default Component;
