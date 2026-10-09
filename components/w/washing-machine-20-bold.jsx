import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmo-gj4um.css';
import '../../css/t/t0j6e-buy.css';
import '../../css/d/dw-imwo_c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wmo-gj4um"/><path class="t0j6e-buy"/><path class="dw-imwo_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:washing-machine-20-bold"} {...others} />);
}

export default Component;
