import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do_ni8ani.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="do_ni8ani"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:badge-shield-with-question-mark"} {...others} />);
}

export default Component;
