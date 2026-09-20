import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p5623oi1l.css';
import '../../css/o/okz80h31p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="p5623oi1l"/><path class="okz80h31p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:programming-script-2-language-programming-code"} {...others} />);
}

export default Component;
