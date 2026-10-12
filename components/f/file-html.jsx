import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/psoam_b8s.css';
import '../../css/q/q-z_h_wne.css';
import '../../css/g/gzumpmblw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="psoam_b8s"/><path class="q-z_h_wne"/><path class="gzumpmblw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-html"} {...others} />);
}

export default Component;
