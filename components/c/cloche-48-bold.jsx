import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub-di_unr.css';
import '../../css/d/dx_dw6rtl.css';
import '../../css/g/g-5s0nbbq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ub-di_unr"/><path class="dx_dw6rtl"/><path class="g-5s0nbbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloche-48-bold"} {...others} />);
}

export default Component;
