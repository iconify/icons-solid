import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_in5mbat.css';
import '../../css/n/naj4aklcp.css';
import '../../css/r/ry41l_1ow.css';
import '../../css/f/fux-f_bmp.css';
import '../../css/o/o267qjp6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y_in5mbat"/><path class="naj4aklcp"/><path class="ry41l_1ow"/><rect transform="matrix(-1 0 0 1 14.31 6.44)" class="fux-f_bmp"/><path class="o267qjp6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mouse-left"} {...others} />);
}

export default Component;
