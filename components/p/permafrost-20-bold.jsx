import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl0h3gwjp.css';
import '../../css/f/fg3z-34yr.css';
import '../../css/x/x657ncclk.css';
import '../../css/r/rc0o1ca8c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nl0h3gwjp"/><path class="fg3z-34yr"/><path class="x657ncclk"/><path class="rc0o1ca8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:permafrost-20-bold"} {...others} />);
}

export default Component;
