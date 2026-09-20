import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpvwby7ij.css';
import '../../css/o/oos9gs_0r.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lpvwby7ij"/><path class="oos9gs_0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:gas-meter"} {...others} />);
}

export default Component;
