import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/d0koy98sj.css';
import '../../css/i/icu8aybza.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="d0koy98sj"/><path class="icu8aybza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:cart"} {...others} />);
}

export default Component;
