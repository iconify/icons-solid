import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zk_skwi6v.css';
import '../../css/p/pvyxalenk.css';
import '../../css/h/h5_6wb9kx.css';
import '../../css/s/s3-pvbj0c.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="zk_skwi6v"/><path class="pvyxalenk"/><path class="h5_6wb9kx"/><path clip-rule="evenodd" class="s3-pvbj0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-stand-middle-bold"} {...others} />);
}

export default Component;
