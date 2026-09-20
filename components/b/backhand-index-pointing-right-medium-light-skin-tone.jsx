import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-pq53bnn.css';
import '../../css/x/xeol2jbkb.css';
import '../../css/f/fd43s_bbr.css';
import '../../css/a/azhho7wuh.css';
import '../../css/x/x_jk5skxt.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/y/yi7mrfbdb.css';
import '../../css/w/wxioh0ndr.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="l-pq53bnn"><path class="xeol2jbkb"/><path class="fd43s_bbr"/><path class="azhho7wuh"/><path class="x_jk5skxt"/></g><g class="ij2x_72vy"><path class="yi7mrfbdb"/><path class="wxioh0ndr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:backhand-index-pointing-right-medium-light-skin-tone"} {...others} />);
}

export default Component;
