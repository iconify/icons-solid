import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5ep7_buc.css';
import '../../css/d/doqpdvjtb.css';
import '../../css/s/sllfovlzd.css';
import '../../css/c/czsmkm6wm.css';
import '../../css/k/ki38ndltb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v5ep7_buc"/><path class="doqpdvjtb"/><path class="sllfovlzd"/><path class="czsmkm6wm"/><path class="ki38ndltb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:desk-globe-48-bold"} {...others} />);
}

export default Component;
