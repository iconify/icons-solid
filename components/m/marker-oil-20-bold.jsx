import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hei8_htdz.css';
import '../../css/i/izs61iv3d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hei8_htdz"/><path class="izs61iv3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-oil-20-bold"} {...others} />);
}

export default Component;
