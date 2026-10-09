import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xydpt3bmg.css';
import '../../css/m/mmtmrcb2y.css';
import '../../css/d/d-rqrld-a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xydpt3bmg"/><path class="mmtmrcb2y"/><path class="d-rqrld-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hotel-20"} {...others} />);
}

export default Component;
