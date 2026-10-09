import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f12oouk3n.css';
import '../../css/k/kl112gs4a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f12oouk3n"/><path class="kl112gs4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carabiner-20-bold"} {...others} />);
}

export default Component;
