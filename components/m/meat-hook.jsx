import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsrr6zzpt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xsrr6zzpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:meat-hook"} {...others} />);
}

export default Component;
