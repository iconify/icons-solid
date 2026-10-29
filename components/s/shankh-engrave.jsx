import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wo-_gbb-y.css';
import '../../css/o/o65yp4j0x.css';
import '../../css/l/l0_d9_beu.css';
import '../../css/p/pq4u4ksec.css';
import '../../css/j/jr5oamekb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k wo-_gbb-y"/><path class="o65yp4j0x wm-shadow"/><path class="l0_d9_beu wm-k"/><path class="pq4u4ksec wm-k"/><path class="jr5oamekb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shankh-engrave"} {...others} />);
}

export default Component;
