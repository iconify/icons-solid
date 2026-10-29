import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g6n5i7m6o.css';
import '../../css/r/rfil0pbml.css';
import '../../css/w/wlhu-1bgu.css';
import '../../css/c/cejpizb8c.css';
import '../../css/d/d9dxm2bwa.css';
import '../../css/a/apvecccmh.css';
import '../../css/e/exu0wp2bb.css';
import '../../css/n/n6-rjkbru.css';
import '../../css/s/swi64lbif.css';
import '../../css/l/lx7jkyq1s.css';
import '../../css/v/vpsyhcbso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g6n5i7m6o wm-k"/><path class="rfil0pbml wm-k"/><path class="wlhu-1bgu wm-k"/><path class="cejpizb8c wm-a"/><path class="d9dxm2bwa wm-a"/><path class="apvecccmh wm-a"/><path class="exu0wp2bb wm-a"/><path class="n6-rjkbru wm-a"/><path class="swi64lbif wm-a"/><path class="lx7jkyq1s wm-shine"/><path class="vpsyhcbso wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:mail"} {...others} />);
}

export default Component;
