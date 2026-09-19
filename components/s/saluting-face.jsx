import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l154elbzm.css';
import '../../css/x/x86asg5-b.css';
import '../../css/v/vr8cxzv3r.css';
import '../../css/c/cs6i_ultf.css';
import '../../css/p/pzyl765_z.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="l154elbzm"/><path class="x86asg5-b"/><path class="vr8cxzv3r"/><path class="cs6i_ultf"/><path class="pzyl765_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:saluting-face"} {...others} />);
}

export default Component;
