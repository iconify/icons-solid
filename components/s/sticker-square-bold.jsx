import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcmgtpbjl.css';
import '../../css/y/ysujvx2kd.css';
import '../../css/o/oi2kbnb3t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hcmgtpbjl"/><path class="ysujvx2kd"/><path class="oi2kbnb3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sticker-square-bold"} {...others} />);
}

export default Component;
