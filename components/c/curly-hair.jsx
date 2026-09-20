import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9a2o1loy.css';
import '../../css/w/wupqombwn.css';
import '../../css/a/azj7lxepr.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/p/pjuh73b9f.css';
import '../../css/c/c1sfv0fej.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="h9a2o1loy"><path class="wupqombwn"/><path class="azj7lxepr"/></g><g class="jn8qy4bru"><path class="pjuh73b9f"/><path class="c1sfv0fej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:curly-hair"} {...others} />);
}

export default Component;
