import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia_ti1b7d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ia_ti1b7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:spikes-half"} {...others} />);
}

export default Component;
