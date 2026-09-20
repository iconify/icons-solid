import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-__qo4vr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="p-__qo4vr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:surprised-face-with-x-eyes-in-circle"} {...others} />);
}

export default Component;
