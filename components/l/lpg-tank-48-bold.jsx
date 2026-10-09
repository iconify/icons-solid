import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc7b7e4ab.css';
import '../../css/u/un07r_bjv.css';
import '../../css/p/pdn0d5lux.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bc7b7e4ab"/><path class="un07r_bjv"/><path class="pdn0d5lux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lpg-tank-48-bold"} {...others} />);
}

export default Component;
