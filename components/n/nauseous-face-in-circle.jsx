import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i70zh-6ql.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="i70zh-6ql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:nauseous-face-in-circle"} {...others} />);
}

export default Component;
