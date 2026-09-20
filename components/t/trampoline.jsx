import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of3dkvhwn.css';
import '../../css/f/f5456gr9d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="of3dkvhwn"/><path class="f5456gr9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:trampoline"} {...others} />);
}

export default Component;
