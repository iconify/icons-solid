import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7vtw8pys.css';
import '../../css/w/w00mpvx0x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d7vtw8pys"/><path class="w00mpvx0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:subsea-cable-20"} {...others} />);
}

export default Component;
