import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qst0molkh.css';
import '../../css/f/fel1l29cn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qst0molkh"/><path clip-rule="evenodd" class="fel1l29cn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:call-hangup-16"} {...others} />);
}

export default Component;
