import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgd52sbee.css';
import '../../css/n/nyea4wfmj.css';
import '../../css/z/zh6d80bar.css';
import '../../css/n/nqj6nwbig.css';
import '../../css/c/cdykzn7cj.css';
import '../../css/o/oyvlpmnvm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fgd52sbee"/><path class="nyea4wfmj"/><path class="zh6d80bar"/><path class="nqj6nwbig"/><path class="cdykzn7cj"/><path class="oyvlpmnvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pray"} {...others} />);
}

export default Component;
