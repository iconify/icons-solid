import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codjm1acu.css';
import '../../css/a/a6286m-rr.css';
import '../../css/v/v026-rbui.css';
import '../../css/v/vpjs_2r9t.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="codjm1acu"/><path class="a6286m-rr"/><path class="v026-rbui"/><path class="vpjs_2r9t"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-tokelau"} {...others} />);
}

export default Component;
