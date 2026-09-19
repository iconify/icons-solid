import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xc_60jfce.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xc_60jfce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:chevron-circle-left"} {...others} />);
}

export default Component;
