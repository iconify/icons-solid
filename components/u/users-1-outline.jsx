import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fgh801jof.css';
import '../../css/k/kkl3fjb8n.css';
import '../../css/l/lq4d5ranb.css';
import '../../css/n/n7qjv3z9a.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="fgh801jof"/><path class="kkl3fjb8n"/><path class="lq4d5ranb"/><path class="n7qjv3z9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:users-1-outline"} {...others} />);
}

export default Component;
