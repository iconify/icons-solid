import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9ecpioam.css';
import '../../css/e/emdzlabdw.css';
import '../../css/y/yqkskmb2o.css';
import '../../css/h/hi1pddb_p.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/i9eahv9rf.css';
import '../../css/d/d8h49tnfx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="w9ecpioam"/><path class="emdzlabdw"/><path class="yqkskmb2o"/><path class="hi1pddb_p"/><g class="jn8qy4bru"><path class="i9eahv9rf"/><path class="d8h49tnfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:syringe"} {...others} />);
}

export default Component;
