import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mx326_ber.css';
import '../../css/g/g1nn1ub5l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mx326_ber"/><path class="g1nn1ub5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:motor-symbol-20-bold"} {...others} />);
}

export default Component;
