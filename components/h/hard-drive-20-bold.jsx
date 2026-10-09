import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epfqiub8e.css';
import '../../css/b/bx-ljfbkz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="epfqiub8e"/><path class="bx-ljfbkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hard-drive-20-bold"} {...others} />);
}

export default Component;
