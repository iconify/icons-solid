import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of3dkvhwn.css';
import '../../css/v/vn6ed8z0m.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="of3dkvhwn"/><path class="vn6ed8z0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:cushion"} {...others} />);
}

export default Component;
