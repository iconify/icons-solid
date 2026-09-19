import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4tkahbhw.css';
import '../../css/q/qez6-c09q.css';
import '../../css/g/ggm_1stfa.css';
import '../../css/n/nwrlovbbs.css';
import '../../css/i/ia5yt0omd.css';
import '../../css/h/hgga3vb8p.css';
import '../../css/n/ndnovjlxh.css';
import '../../css/k/k0-y1yb3r.css';
import '../../css/x/xsh8s3irr.css';
import '../../css/s/sb-on7i1d.css';
import '../../css/w/wdeuzrbxs.css';
import '../../css/r/rbfribbyd.css';
import '../../css/c/cgkg3ebae.css';
import '../../css/h/ha2bogbld.css';
import '../../css/o/obrp601ik.css';
import '../../css/k/knnv3wbfb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="g4tkahbhw"/><path class="qez6-c09q"/><path class="ggm_1stfa"/><path class="nwrlovbbs"/><path class="ia5yt0omd"/><path class="hgga3vb8p"/><path class="ndnovjlxh"/><path class="k0-y1yb3r"/><path class="xsh8s3irr"/><path class="sb-on7i1d"/><path class="wdeuzrbxs"/><path class="rbfribbyd"/><path class="cgkg3ebae"/><path class="ha2bogbld"/><path class="obrp601ik"/><path class="knnv3wbfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-office-worker"} {...others} />);
}

export default Component;
