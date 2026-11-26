import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/trz9rjbpe.css';
import '../../css/y/ymihmcc1m.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="t_2lkqbxb"><path class="trz9rjbpe"/><path class="ymihmcc1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:paperclip"} {...others} />);
}

export default Component;
