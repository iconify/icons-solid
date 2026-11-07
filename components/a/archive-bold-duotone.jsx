import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ileo9db7a.css';
import '../../css/i/i3l80h-5o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ileo9db7a"/><path class="i3l80h-5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-bold-duotone"} {...others} />);
}

export default Component;
