import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ax9d5gbpa.css';
import '../../css/w/w6rxgvl3c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ax9d5gbpa"/><path class="w6rxgvl3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:face-shield-20"} {...others} />);
}

export default Component;
