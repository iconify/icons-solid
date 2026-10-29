import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cu0yrbcug.css';
import '../../css/t/tpcaudkyt.css';
import '../../css/x/x6mwkdbkb.css';
import '../../css/q/q1hd3jbfw.css';
import '../../css/h/hlj2k1-lr.css';
import '../../css/w/w-db73han.css';
import '../../css/g/gt-4g5bjd.css';
import '../../css/z/zftwlsr9b.css';
import '../../css/g/gqodwy4ha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cu0yrbcug wm-k"/><path class="tpcaudkyt wm-k"/><path class="wm-k x6mwkdbkb"/><path class="q1hd3jbfw wm-shine"/><path class="hlj2k1-lr wm-k"/><path class="w-db73han wm-k"/><path class="gt-4g5bjd wm-k"/><path class="wm-k zftwlsr9b"/><path class="gqodwy4ha wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:dholak"} {...others} />);
}

export default Component;
