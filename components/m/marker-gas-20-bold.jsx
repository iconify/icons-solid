import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hei8_htdz.css';
import '../../css/j/ju03a42fm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hei8_htdz"/><path class="ju03a42fm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-gas-20-bold"} {...others} />);
}

export default Component;
