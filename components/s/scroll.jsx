import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfamqvjas.css';
import '../../css/h/hjrj_fbxo.css';
import '../../css/l/luctw4btv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jfamqvjas"/><path class="hjrj_fbxo"/><path clip-rule="evenodd" class="luctw4btv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:scroll"} {...others} />);
}

export default Component;
