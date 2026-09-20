import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/c6h1i8y0m.css';
import '../../css/h/h334anbct.css';
import '../../css/e/e9_m8lzcu.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="c6h1i8y0m"/><path class="h334anbct"/><path class="e9_m8lzcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:divide-square"} {...others} />);
}

export default Component;
