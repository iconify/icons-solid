import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi5uaactm.css';
import '../../css/r/rnzp9jboq.css';
import '../../css/v/vayq6bcaz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hi5uaactm"/><path class="rnzp9jboq"/><path class="vayq6bcaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-leak-20"} {...others} />);
}

export default Component;
