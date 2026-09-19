import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze2vclaer.css';
import '../../css/t/tiqlprpox.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ze2vclaer"/><path class="tiqlprpox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:at-circle"} {...others} />);
}

export default Component;
