import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vs7_jfbvz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vs7_jfbvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:asterisk"} {...others} />);
}

export default Component;
