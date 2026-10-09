import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1cfpg0nt.css';
import '../../css/l/lbw0b8b1k.css';
import '../../css/b/bdk_48bah.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g1cfpg0nt"/><path class="lbw0b8b1k"/><path class="bdk_48bah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:furnace-20"} {...others} />);
}

export default Component;
