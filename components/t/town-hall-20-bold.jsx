import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3ht3i_xn.css';
import '../../css/n/n--zs0bqk.css';
import '../../css/v/v5pwrda9h.css';
import '../../css/m/m-9fczbok.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n3ht3i_xn"/><path class="n--zs0bqk"/><path class="v5pwrda9h"/><path class="m-9fczbok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:town-hall-20-bold"} {...others} />);
}

export default Component;
