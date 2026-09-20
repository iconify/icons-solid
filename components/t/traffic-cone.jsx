import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp1c9py_h.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="xp1c9py_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:traffic-cone"} {...others} />);
}

export default Component;
