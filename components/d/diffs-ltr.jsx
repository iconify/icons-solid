import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_u8qmzuo.css';
import '../../css/l/lkmselk-n.css';
import '../../css/l/lsxdb1s3e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q_u8qmzuo"/><path class="lkmselk-n"/><path class="lsxdb1s3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:diffs-ltr"} {...others} />);
}

export default Component;
