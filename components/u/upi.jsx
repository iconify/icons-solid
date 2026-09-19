import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gupyo-9yt.css';
import '../../css/l/li2ndrlth.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gupyo-9yt"/><path class="li2ndrlth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:upi"} {...others} />);
}

export default Component;
