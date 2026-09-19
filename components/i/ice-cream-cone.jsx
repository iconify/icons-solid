import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghpm_5bwp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ghpm_5bwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:ice-cream-cone"} {...others} />);
}

export default Component;
