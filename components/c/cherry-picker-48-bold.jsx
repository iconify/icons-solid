import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/icyfw2p5c.css';
import '../../css/g/g2jzfhoqs.css';
import '../../css/r/rjsh6cbuu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="icyfw2p5c"/><path class="g2jzfhoqs"/><path class="rjsh6cbuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cherry-picker-48-bold"} {...others} />);
}

export default Component;
