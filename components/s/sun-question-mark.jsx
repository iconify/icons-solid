import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_o2x7bwt.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="w_o2x7bwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:sun-question-mark"} {...others} />);
}

export default Component;
