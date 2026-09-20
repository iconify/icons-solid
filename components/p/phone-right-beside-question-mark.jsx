import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yoqn4k-mt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="yoqn4k-mt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:phone-right-beside-question-mark"} {...others} />);
}

export default Component;
