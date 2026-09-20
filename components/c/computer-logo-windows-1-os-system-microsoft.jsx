import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlet2fqqv.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="hlet2fqqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-logo-windows-1-os-system-microsoft"} {...others} />);
}

export default Component;
