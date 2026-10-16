import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob01ca7jx.css';
import '../../css/f/f_4nudb1i.css';
import '../../css/n/nzv-bubbx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ob01ca7jx"/><path class="f_4nudb1i"/><path class="nzv-bubbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:desertification-20-bold"} {...others} />);
}

export default Component;
