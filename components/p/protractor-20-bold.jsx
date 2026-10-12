import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lehxztmwm.css';
import '../../css/r/r_0sobc6x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lehxztmwm"/><path class="r_0sobc6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:protractor-20-bold"} {...others} />);
}

export default Component;
