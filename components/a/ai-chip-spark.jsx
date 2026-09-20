import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cg7fccbnq.css';
import '../../css/b/b7n-jjpih.css';
import '../../css/k/keevlsb2d.css';
import '../../css/v/vu02wxbxf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cg7fccbnq"/><path class="b7n-jjpih"/><path class="keevlsb2d"/><path class="vu02wxbxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ai-chip-spark"} {...others} />);
}

export default Component;
