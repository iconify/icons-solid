import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ym70cwagl.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="ym70cwagl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:money-bill-wave"} {...others} />);
}

export default Component;
