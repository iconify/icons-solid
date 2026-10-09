import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cr-pjp-tv.css';
import '../../css/l/lmp8iccnc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cr-pjp-tv"/><path class="lmp8iccnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-up-right-48"} {...others} />);
}

export default Component;
