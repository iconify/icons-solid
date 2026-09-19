import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfd6m9b_e.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="jfd6m9b_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:auto-enhance-off"} {...others} />);
}

export default Component;
