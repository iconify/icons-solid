import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o52-iy1vn.css';
import '../../css/o/ol_nl5bzg.css';
import '../../css/b/b2_c8s4io.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="o52-iy1vn"/><path class="ol_nl5bzg"/><path clip-rule="evenodd" class="b2_c8s4io"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:multiple-file-2-flat"} {...others} />);
}

export default Component;
