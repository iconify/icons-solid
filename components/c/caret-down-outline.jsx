import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy341l93m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gy341l93m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:caret-down-outline"} {...others} />);
}

export default Component;
