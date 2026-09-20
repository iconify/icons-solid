import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yk_lkmb7k.css';
import '../../css/v/v6k-1zb2k.css';
import '../../css/s/sj6ssgzvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yk_lkmb7k"/><path class="v6k-1zb2k"/><path class="sj6ssgzvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:programming-language-browser-css"} {...others} />);
}

export default Component;
