import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsgp-8odn.css';
import '../../css/u/unq7cxbuf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xsgp-8odn"/><path class="unq7cxbuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:micro-inverter-48"} {...others} />);
}

export default Component;
