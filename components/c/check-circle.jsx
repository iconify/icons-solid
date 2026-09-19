import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbh8_acgb.css';
import '../../css/g/gd6ueob5v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fbh8_acgb"/><path class="gd6ueob5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:check-circle"} {...others} />);
}

export default Component;
