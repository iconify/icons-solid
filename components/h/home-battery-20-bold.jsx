import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fckik_nux.css';
import '../../css/r/ryvp9vm2m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fckik_nux"/><path class="ryvp9vm2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:home-battery-20-bold"} {...others} />);
}

export default Component;
