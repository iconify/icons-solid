import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1fi5_bhd.css';
import '../../css/p/p7vazbcay.css';
import '../../css/e/ec7l8wh3f.css';
import '../../css/f/fdmzxwnqj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u1fi5_bhd"/><path class="p7vazbcay"/><path class="ec7l8wh3f"/><path class="fdmzxwnqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ambulance-20-bold"} {...others} />);
}

export default Component;
