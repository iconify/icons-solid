import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xemdinble.css';
import '../../css/h/hj5nmbbbk.css';
import '../../css/k/k-0qe8evz.css';
import '../../css/y/yrhbchbim.css';
import '../../css/t/t8ymb1o1q.css';
import '../../css/e/ekmfcrgti.css';
import '../../css/j/jb-zh7tku.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xemdinble"/><path class="hj5nmbbbk"/><path class="k-0qe8evz"/><path class="yrhbchbim"/><path class="t8ymb1o1q"/><path class="ekmfcrgti"/><path class="jb-zh7tku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ewe"} {...others} />);
}

export default Component;
