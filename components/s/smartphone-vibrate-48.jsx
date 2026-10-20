import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0yys_sjp.css';
import '../../css/p/pkv646nkw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z0yys_sjp"/><path class="pkv646nkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smartphone-vibrate-48"} {...others} />);
}

export default Component;
