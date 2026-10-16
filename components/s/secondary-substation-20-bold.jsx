import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnex-cbcf.css';
import '../../css/m/m480pab_j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pnex-cbcf"/><path class="m480pab_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:secondary-substation-20-bold"} {...others} />);
}

export default Component;
