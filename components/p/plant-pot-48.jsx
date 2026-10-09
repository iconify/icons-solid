import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sae2abcxn.css';
import '../../css/o/ofilwt45e.css';
import '../../css/c/ctcrptfet.css';
import '../../css/c/c1reo_bid.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sae2abcxn"/><path class="ofilwt45e"/><path class="ctcrptfet"/><path class="c1reo_bid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plant-pot-48"} {...others} />);
}

export default Component;
