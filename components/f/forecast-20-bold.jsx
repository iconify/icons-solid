import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aezfh675b.css';
import '../../css/d/d-_30k0so.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aezfh675b"/><path class="d-_30k0so"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:forecast-20-bold"} {...others} />);
}

export default Component;
