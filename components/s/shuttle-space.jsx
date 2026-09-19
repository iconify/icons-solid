import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms7rf3bcm.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="ms7rf3bcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:shuttle-space"} {...others} />);
}

export default Component;
