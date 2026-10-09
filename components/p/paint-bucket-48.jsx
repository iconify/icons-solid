import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrkr6bc-w.css';
import '../../css/x/x05r09_kp.css';
import '../../css/z/zmroq2b4k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xrkr6bc-w"/><path class="x05r09_kp"/><path class="zmroq2b4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paint-bucket-48"} {...others} />);
}

export default Component;
