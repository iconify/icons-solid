import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp_7a8bjw.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="yp_7a8bjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:fountain-14"} {...others} />);
}

export default Component;
