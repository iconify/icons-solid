import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_o-pw-1u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z_o-pw-1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:caret-back-circle"} {...others} />);
}

export default Component;
