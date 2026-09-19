import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c-xjt6unr.css';
import '../../css/s/sgj193bua.css';
import '../../css/e/emzmn0o4c.css';
import '../../css/f/fpzasvuqa.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="c-xjt6unr"/><path class="sgj193bua"/><path class="emzmn0o4c"/><path class="fpzasvuqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:turn-sign-outline"} {...others} />);
}

export default Component;
