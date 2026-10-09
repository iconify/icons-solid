import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qox-itb7z.css';
import '../../css/i/ijj0fga_g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qox-itb7z"/><path class="ijj0fga_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:contact-20-bold"} {...others} />);
}

export default Component;
