import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ist7qnbhr.css';
import '../../css/v/vhdemacnv.css';
import '../../css/o/o1-sdirwp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ist7qnbhr"/><path class="vhdemacnv"/><path class="o1-sdirwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:windmill-20-bold"} {...others} />);
}

export default Component;
