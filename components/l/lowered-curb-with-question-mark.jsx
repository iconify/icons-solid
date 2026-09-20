import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1uxt3j4p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="d1uxt3j4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:lowered-curb-with-question-mark"} {...others} />);
}

export default Component;
