import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/milv0125p.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="milv0125p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vite"} {...others} />);
}

export default Component;
