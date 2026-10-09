import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxaxxdb7l.css';
import '../../css/x/xyzy_tbmx.css';
import '../../css/q/q56cueczx.css';
import '../../css/b/b81wd4bns.css';
import '../../css/q/q4cd8jakj.css';
import '../../css/o/o06jzmb8e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oxaxxdb7l"/><path class="xyzy_tbmx"/><path class="q56cueczx"/><path class="b81wd4bns"/><path class="q4cd8jakj"/><path class="o06jzmb8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-panel-x-20"} {...others} />);
}

export default Component;
