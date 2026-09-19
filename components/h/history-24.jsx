import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kzgllqb2o.css';
import '../../css/u/u5njakb3w.css';
import '../../css/a/aocyygbnn.css';
import '../../css/c/crcwzkbnx.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/g/g0pybxe0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGmozAqe4l)" class="kzgllqb2o"/><path fill="url(#SVGJdgEXdlf)" class="u5njakb3w"/><defs><linearGradient id="SVGmozAqe4l" x1="10.156" x2="22.094" y1="18.45" y2="13.414" gradientUnits="userSpaceOnUse"><stop class="aocyygbnn"/><stop offset="1" class="crcwzkbnx"/></linearGradient><linearGradient id="SVGJdgEXdlf" x1="3" x2="7.831" y1="4.059" y2="24.288" gradientUnits="userSpaceOnUse"><stop class="ol7cejbxg"/><stop offset="1" class="g0pybxe0r"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:history-24"} {...others} />);
}

export default Component;
