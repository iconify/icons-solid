import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orc8djbsy.css';
import '../../css/s/s5lw05brm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="orc8djbsy"/><path class="s5lw05brm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-trash"} {...others} />);
}

export default Component;
