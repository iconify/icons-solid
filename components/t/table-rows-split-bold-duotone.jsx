import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/g/gb9lyd4go.css';
import '../../css/e/ephu9cbch.css';
import '../../css/a/ap6khzqok.css';
import '../../css/a/any7xwbba.css';
import '../../css/f/fj1ohpyjn.css';
import '../../css/m/m6l098byt.css';
import '../../css/b/b0r_8t64h.css';
import '../../css/u/uje0cgb4o.css';
import '../../css/j/j8easmmqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="gb9lyd4go"/><path class="ephu9cbch"/></g><path class="ap6khzqok"/><path class="any7xwbba"/><path class="fj1ohpyjn"/><path class="m6l098byt"/><path class="b0r_8t64h"/><path class="uje0cgb4o"/><path class="j8easmmqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-rows-split-bold-duotone"} {...others} />);
}

export default Component;
