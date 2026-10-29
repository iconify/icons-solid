import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pdfeonb1r.css';
import '../../css/a/a03ggtq6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pdfeonb1r"/><path class="a03ggtq6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-sketch"} {...others} />);
}

export default Component;
