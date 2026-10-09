import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ga00bibxt.css';
import '../../css/u/u1d_hjplu.css';
import '../../css/o/oiqizvb8s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ga00bibxt"/><path class="u1d_hjplu"/><path class="oiqizvb8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-sock-48"} {...others} />);
}

export default Component;
