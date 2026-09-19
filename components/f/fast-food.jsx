import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekcb3b0rz.css';
import '../../css/j/jfwgpxqzl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ekcb3b0rz"/><path class="jfwgpxqzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:fast-food"} {...others} />);
}

export default Component;
