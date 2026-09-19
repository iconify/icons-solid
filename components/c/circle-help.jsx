import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zdke2vb7y.css';
import '../../css/l/lgyakeb9t.css';
import '../../css/v/vj_pdf_el.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zdke2vb7y"/><path class="lgyakeb9t"/><path class="vj_pdf_el"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mono-icons:circle-help"} {...others} />);
}

export default Component;
