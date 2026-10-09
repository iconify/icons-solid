import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7sb8tbhe.css';
import '../../css/v/vj9dlzbor.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g7sb8tbhe"/><path class="vj9dlzbor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:toaster-48"} {...others} />);
}

export default Component;
