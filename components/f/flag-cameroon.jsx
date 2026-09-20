import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/r/rmslx6b5x.css';
import '../../css/q/qe4w_pjer.css';
import '../../css/h/hiioskbzo.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="rmslx6b5x"/><path class="qe4w_pjer"/><path class="hiioskbzo"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-cameroon"} {...others} />);
}

export default Component;
