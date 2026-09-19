import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6w-o8_8x.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="h6w-o8_8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:fire-flame-simple"} {...others} />);
}

export default Component;
