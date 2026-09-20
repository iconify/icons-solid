import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vk67feb3m.css';
import '../../css/e/ef7g0fbtq.css';
import '../../css/q/q7k182bia.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="vk67feb3m"/><path class="ef7g0fbtq"/><path class="q7k182bia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:files"} {...others} />);
}

export default Component;
