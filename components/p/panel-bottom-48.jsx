import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3q6uacna.css';
import '../../css/q/qvwfceb-n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v3q6uacna"/><path class="qvwfceb-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:panel-bottom-48"} {...others} />);
}

export default Component;
