import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvnrx2b2y.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/m/mkeays9ar.css';
import '../../css/m/meihigs9f.css';
import '../../css/q/q1syprbbl.css';
import '../../css/a/a2wkeuloj.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGscArcevy"><path class="tvnrx2b2y"/></clipPath></defs><g clip-path="url(#SVGscArcevy)" transform="translate(-106.2)scale(1.0321)"><g class="nv9qcacyl"><path class="mkeays9ar"/><path class="meihigs9f"/><path class="q1syprbbl"/><path class="a2wkeuloj"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:tz-1x1"} {...others} />);
}

export default Component;
