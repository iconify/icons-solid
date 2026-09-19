import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdu2pbcie.css';
import '../../css/z/z8gtf7k7b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kdu2pbcie"/><path class="z8gtf7k7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-horizontal"} {...others} />);
}

export default Component;
