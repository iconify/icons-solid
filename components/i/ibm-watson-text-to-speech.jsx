import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xz4cr67ul.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xz4cr67ul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-watson-text-to-speech"} {...others} />);
}

export default Component;
