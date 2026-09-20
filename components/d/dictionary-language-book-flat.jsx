import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zgcba5bww.css';
import '../../css/n/nk1speb3h.css';
import '../../css/f/ffrnjebod.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="zgcba5bww"/><path class="nk1speb3h"/><path class="ffrnjebod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:dictionary-language-book-flat"} {...others} />);
}

export default Component;
