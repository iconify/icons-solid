import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg8tnbcvl.css';
import '../../css/s/sx-04bc4i.css';
import '../../css/r/rwowwm9cp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xg8tnbcvl"/><path class="sx-04bc4i"/><path class="rwowwm9cp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cogs-20-bold"} {...others} />);
}

export default Component;
