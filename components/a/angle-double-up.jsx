import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq8ox75ei.css';
import '../../css/r/r3i--soji.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="dq8ox75ei"/><path class="r3i--soji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:angle-double-up"} {...others} />);
}

export default Component;
