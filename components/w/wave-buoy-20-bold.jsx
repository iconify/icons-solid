import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1qfvnbiq.css';
import '../../css/w/w7seexb0p.css';
import '../../css/m/m2f1aybya.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i1qfvnbiq"/><path class="w7seexb0p"/><path class="m2f1aybya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wave-buoy-20-bold"} {...others} />);
}

export default Component;
