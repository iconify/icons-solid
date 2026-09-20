import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mtx7r_b3k.css';
import '../../css/l/ln1vkxyeu.css';
import '../../css/k/knqmx4bzv.css';
import '../../css/t/th2rkvb_l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mtx7r_b3k"/><path class="ln1vkxyeu"/><path class="knqmx4bzv"/><path class="th2rkvb_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:timeful-dark"} {...others} />);
}

export default Component;
