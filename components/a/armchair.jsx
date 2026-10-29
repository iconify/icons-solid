import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pf7e3lb-r.css';
import '../../css/n/nhx262uvt.css';
import '../../css/y/yfvzahbpn.css';
import '../../css/p/pitbyh1zs.css';
import '../../css/f/furtg8b7w.css';
import '../../css/s/sianx631d.css';
import '../../css/u/uiriykbbk.css';
import '../../css/m/md4l4qraf.css';
import '../../css/g/g16hrzbae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pf7e3lb-r wm-shadow"/><path class="nhx262uvt wm-shadow"/><path class="yfvzahbpn"/><path class="pitbyh1zs"/><path class="furtg8b7w"/><path class="sianx631d"/><path class="uiriykbbk"/><path class="md4l4qraf"/><path class="g16hrzbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:armchair"} {...others} />);
}

export default Component;
