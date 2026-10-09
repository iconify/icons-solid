import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krobukb5c.css';
import '../../css/t/tbhx0yb6y.css';
import '../../css/m/m3r1373vs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="krobukb5c"/><path class="tbhx0yb6y"/><path class="m3r1373vs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paint-roller-20"} {...others} />);
}

export default Component;
