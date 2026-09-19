import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxujzib5b.css';
import '../../css/o/okc6ec79j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jxujzib5b"/><path class="okc6ec79j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-gcm"} {...others} />);
}

export default Component;
