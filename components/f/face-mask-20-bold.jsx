import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwf-ck3ci.css';
import '../../css/k/kj6dhhbko.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nwf-ck3ci"/><path class="kj6dhhbko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:face-mask-20-bold"} {...others} />);
}

export default Component;
