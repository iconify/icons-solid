import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/e/e5k9t83zt.css';
import '../../css/x/xwn71-jsf.css';
import '../../css/v/v4p-_fzte.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="e5k9t83zt"/><path class="xwn71-jsf"/><path class="v4p-_fzte"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-sark"} {...others} />);
}

export default Component;
