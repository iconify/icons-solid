import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dn08ad5pw.css';
import '../../css/l/lrtuiw7ei.css';
import '../../css/c/c5qy8m2mi.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/mxa7kfbgt.css';
import '../../css/i/iknetdbmw.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="dn08ad5pw"/><path clip-rule="evenodd" class="lrtuiw7ei"/><path class="c5qy8m2mi"/><g class="jn8qy4bru"><path class="mxa7kfbgt"/><path class="iknetdbmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-square-button"} {...others} />);
}

export default Component;
