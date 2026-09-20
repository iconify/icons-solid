import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4j1-0m1e.css';
import '../../css/f/ftpwfegvu.css';
import '../../css/g/gmed_dlsu.css';
import '../../css/x/xjv_0deyo.css';
import '../../css/p/pm4q2mb1o.css';
import '../../css/d/dsdqvt2ds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n4j1-0m1e"/><path class="ftpwfegvu"/><path class="gmed_dlsu"/><path class="xjv_0deyo"/><path class="pm4q2mb1o"/><path class="dsdqvt2ds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:wedding-certificate"} {...others} />);
}

export default Component;
