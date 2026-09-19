import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz5zt-bzl.css';

const viewBox = {"width":435,"height":512};
const content = `<path class="nz5zt-bzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:apiextractor"} {...others} />);
}

export default Component;
