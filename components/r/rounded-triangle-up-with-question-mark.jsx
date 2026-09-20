import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh609ibnx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rh609ibnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:rounded-triangle-up-with-question-mark"} {...others} />);
}

export default Component;
