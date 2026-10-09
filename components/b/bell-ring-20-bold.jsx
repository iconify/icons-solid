import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/waxdi_b3y.css';
import '../../css/d/dqbca823b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="waxdi_b3y"/><path class="dqbca823b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-ring-20-bold"} {...others} />);
}

export default Component;
