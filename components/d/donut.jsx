import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b57totb9w.css';
import '../../css/l/lhufifbtm.css';
import '../../css/o/o2-hdlffi.css';
import '../../css/m/mxlqdwbyk.css';
import '../../css/g/gffdzobgp.css';
import '../../css/a/a-9q-5vhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b57totb9w wm-shadow"/><path class="lhufifbtm"/><path class="o2-hdlffi"/><path class="mxlqdwbyk"/><path class="gffdzobgp"/><path class="a-9q-5vhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:donut"} {...others} />);
}

export default Component;
