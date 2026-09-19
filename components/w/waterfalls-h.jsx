import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvilx1q3c.css';
import '../../css/b/bf87ls_wi.css';
import '../../css/v/vg4c8senf.css';
import '../../css/l/lcxi6jbsf.css';
import '../../css/k/khgmiwbkn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="kvilx1q3c"><path class="bf87ls_wi"/><path class="vg4c8senf"/><path class="lcxi6jbsf"/><path class="khgmiwbkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:waterfalls-h"} {...others} />);
}

export default Component;
