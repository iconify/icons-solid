import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgv4y0x0l.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="wgv4y0x0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:pump-soap"} {...others} />);
}

export default Component;
