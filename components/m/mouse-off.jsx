import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/trkobpb0u.css';
import '../../css/y/ym2n1ubxg.css';
import '../../css/s/sr1h5lzei.css';
import '../../css/c/cif8nnbzz.css';
import '../../css/b/b85x29w4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="trkobpb0u"/><rect class="ym2n1ubxg"/><path class="sr1h5lzei"/><rect class="cif8nnbzz"/><path class="b85x29w4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mouse-off"} {...others} />);
}

export default Component;
