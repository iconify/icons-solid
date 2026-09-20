import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esa6e0o2d.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="esa6e0o2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-logo-windows-2-os-system-microsoft"} {...others} />);
}

export default Component;
