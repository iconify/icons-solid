import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oynp_94rk.css';
import '../../css/s/spuk--beu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oynp_94rk"/><path class="spuk--beu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-down-left-20-bold"} {...others} />);
}

export default Component;
