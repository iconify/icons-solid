import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyg45n2yc.css';
import '../../css/h/htonzo4-k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xyg45n2yc"/><path class="htonzo4-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:monopile-48-bold"} {...others} />);
}

export default Component;
