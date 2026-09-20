import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/u/uaab9vbqh.css';
import '../../css/y/yqjcuo46u.css';
import '../../css/k/kwgml3bxe.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="uaab9vbqh"/><path class="yqjcuo46u"/><path class="kwgml3bxe"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-myanmar-burma"} {...others} />);
}

export default Component;
