import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c38ur7vib.css';
import '../../css/f/fwwetn73i.css';
import '../../css/v/vu0y6dd0n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c38ur7vib"/><path class="fwwetn73i"/><path class="vu0y6dd0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:steam-reformer-20"} {...others} />);
}

export default Component;
