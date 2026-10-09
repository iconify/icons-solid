import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pju4p0r6w.css';
import '../../css/n/n8yz9-5xk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pju4p0r6w"/><path class="n8yz9-5xk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevrons-up-48-bold"} {...others} />);
}

export default Component;
