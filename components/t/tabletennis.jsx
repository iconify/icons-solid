import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/expm53boj.css';
import '../../css/g/gxdfmzjck.css';
import '../../css/h/hw0kxtbhp.css';
import '../../css/p/pifh3f0yj.css';
import '../../css/o/oquvwwkbu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="expm53boj"/><path class="gxdfmzjck"/><circle class="hw0kxtbhp"/><circle class="pifh3f0yj"/><path class="oquvwwkbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:tabletennis"} {...others} />);
}

export default Component;
