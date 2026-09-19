import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx2yo906k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kx2yo906k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-z-os-package-manager"} {...others} />);
}

export default Component;
