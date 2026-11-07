import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/rk971kb1l.css';
import '../../css/g/g68tbfbgg.css';
import '../../css/r/r9s3vab0v.css';
import '../../css/r/rrxp0rbgf.css';
import '../../css/t/t7lmbfbiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="rk971kb1l"/><path class="g68tbfbgg"/></g><path class="r9s3vab0v"/><path class="rrxp0rbgf"/><path class="t7lmbfbiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mailbox-bold-duotone"} {...others} />);
}

export default Component;
