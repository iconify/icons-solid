import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm2jupbhh.css';
import '../../css/a/acmio-sok.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xm2jupbhh"/><path class="acmio-sok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-x-48-bold"} {...others} />);
}

export default Component;
