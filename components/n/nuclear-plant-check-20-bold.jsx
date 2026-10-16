import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ey18pvvad.css';
import '../../css/c/cbw0uj2ck.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ey18pvvad"/><path class="cbw0uj2ck"/><path class="sh06c0bcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nuclear-plant-check-20-bold"} {...others} />);
}

export default Component;
