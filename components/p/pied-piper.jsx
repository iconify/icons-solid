import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me1not0hq.css';

const viewBox = {"width":480,"height":512};
const content = `<path class="me1not0hq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:pied-piper"} {...others} />);
}

export default Component;
