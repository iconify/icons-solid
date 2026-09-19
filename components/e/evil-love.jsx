import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mc1bpgixu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mc1bpgixu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:evil-love"} {...others} />);
}

export default Component;
