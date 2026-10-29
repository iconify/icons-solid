import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o-oicrbzq.css';
import '../../css/t/to-v0oh0h.css';
import '../../css/u/uol065bah.css';
import '../../css/g/gjzqrac0z.css';
import '../../css/j/j0qwii82m.css';
import '../../css/h/hxk3i1yfq.css';
import '../../css/q/qarimnb-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o-oicrbzq wm-k"/><path class="to-v0oh0h wm-k"/><path class="uol065bah wm-k"/><path class="gjzqrac0z wm-shine"/><path class="j0qwii82m wm-s"/><path class="hxk3i1yfq wm-s"/><path class="qarimnb-b wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:cloud-off"} {...others} />);
}

export default Component;
