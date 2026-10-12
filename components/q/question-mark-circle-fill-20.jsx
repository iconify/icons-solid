import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cysjv4btu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cysjv4btu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:question-mark-circle-fill-20"} {...others} />);
}

export default Component;
