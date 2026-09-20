import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rz4ck4-4i.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rz4ck4-4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:flush-curb-with-question-mark"} {...others} />);
}

export default Component;
