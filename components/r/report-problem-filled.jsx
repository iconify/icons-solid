import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyz4p1nzt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zyz4p1nzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:report-problem-filled"} {...others} />);
}

export default Component;
