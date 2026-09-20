import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck7z_9alj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ck7z_9alj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-iris-scan-approved"} {...others} />);
}

export default Component;
