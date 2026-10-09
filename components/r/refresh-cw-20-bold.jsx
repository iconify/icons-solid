import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9ur0zbdu.css';
import '../../css/v/vlk0aab2e.css';
import '../../css/f/fbiyyn6-d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s9ur0zbdu"/><path class="vlk0aab2e"/><path class="fbiyyn6-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refresh-cw-20-bold"} {...others} />);
}

export default Component;
