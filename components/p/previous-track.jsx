import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pdflanbnl.css';
import '../../css/d/dsfzr7bxl.css';
import '../../css/t/tvz_dccwk.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pdflanbnl"/><path class="dsfzr7bxl"/><path class="tvz_dccwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:previous-track"} {...others} />);
}

export default Component;
