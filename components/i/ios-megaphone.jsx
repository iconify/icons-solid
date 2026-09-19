import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0j6vybkj.css';
import '../../css/v/vytfc2c_t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m0j6vybkj"/><path class="vytfc2c_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-megaphone"} {...others} />);
}

export default Component;
