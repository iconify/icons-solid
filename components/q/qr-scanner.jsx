import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpkla4bye.css';
import '../../css/l/lvwmqz7ny.css';
import '../../css/o/otefzfpii.css';
import '../../css/d/dy1rfcq1t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cpkla4bye"/><path class="lvwmqz7ny"/><path class="otefzfpii"/><path class="dy1rfcq1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:qr-scanner"} {...others} />);
}

export default Component;
