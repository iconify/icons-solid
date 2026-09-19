import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu-ss8biv.css';
import '../../css/z/zg21q53ns.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hu-ss8biv"/><path class="zg21q53ns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-watson-natural-language-understanding"} {...others} />);
}

export default Component;
