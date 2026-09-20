import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h3z7xyb9s.css';
import '../../css/e/esnm02bkh.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="h3z7xyb9s"/><path class="esnm02bkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:chat-alt-3"} {...others} />);
}

export default Component;
