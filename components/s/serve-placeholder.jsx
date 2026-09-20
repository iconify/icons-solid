import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p5fuj3b6w.css';
import '../../css/q/qdsp-hrkf.css';
import '../../css/v/vo5b24vpl.css';
import '../../css/a/azqo8hkcf.css';
import '../../css/m/mni_8t9qf.css';
import '../../css/y/yluhjg40s.css';
import '../../css/n/n5pl0wbpi.css';
import '../../css/b/buuegluit.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="p5fuj3b6w"/><path class="qdsp-hrkf"/><path class="vo5b24vpl"/><path class="azqo8hkcf"/><path class="mni_8t9qf"/><path class="yluhjg40s"/><path class="n5pl0wbpi"/><path class="buuegluit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"unjs:serve-placeholder"} {...others} />);
}

export default Component;
