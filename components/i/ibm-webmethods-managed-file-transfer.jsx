import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzf-sabyb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yzf-sabyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-webmethods-managed-file-transfer"} {...others} />);
}

export default Component;
