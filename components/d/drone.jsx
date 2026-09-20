import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pyq3pqxle.css';
import '../../css/t/t0uz3sufp.css';
import '../../css/w/w_nhvcc2y.css';
import '../../css/x/xarilxf9i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pyq3pqxle"/><path class="t0uz3sufp"/><path class="w_nhvcc2y"/><path class="xarilxf9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:drone"} {...others} />);
}

export default Component;
