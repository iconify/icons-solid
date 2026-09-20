import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd2af0bmx.css';
import '../../css/e/e5_g43bxn.css';
import '../../css/t/t56zhebui.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qd2af0bmx"/><path class="e5_g43bxn"/><path class="t56zhebui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cooked-rice"} {...others} />);
}

export default Component;
