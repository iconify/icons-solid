import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmycjebkn.css';
import '../../css/f/f6krj6bdn.css';
import '../../css/i/i6na-zfmx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hmycjebkn"/><path class="f6krj6bdn"/><path class="i6na-zfmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-z-environments-dev-sec-ops"} {...others} />);
}

export default Component;
