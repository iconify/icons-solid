import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvg6d5bwa.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="gvg6d5bwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:heart-circle-xmark"} {...others} />);
}

export default Component;
