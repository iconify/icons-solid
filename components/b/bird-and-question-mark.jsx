import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/by6j3h99l.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="by6j3h99l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bird-and-question-mark"} {...others} />);
}

export default Component;
