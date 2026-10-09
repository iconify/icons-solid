import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_d-chbfv.css';
import '../../css/p/p48t35bio.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r_d-chbfv"/><path class="p48t35bio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-type2-20"} {...others} />);
}

export default Component;
