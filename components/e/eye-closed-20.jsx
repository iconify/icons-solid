import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1j29iy8v.css';
import '../../css/g/gljfs3bti.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l1j29iy8v"/><path class="gljfs3bti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eye-closed-20"} {...others} />);
}

export default Component;
