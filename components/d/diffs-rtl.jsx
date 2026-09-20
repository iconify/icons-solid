import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srpby-b4v.css';
import '../../css/e/effr8obxp.css';
import '../../css/m/m3ckqtbim.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="srpby-b4v"/><path class="effr8obxp"/><path class="m3ckqtbim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:diffs-rtl"} {...others} />);
}

export default Component;
