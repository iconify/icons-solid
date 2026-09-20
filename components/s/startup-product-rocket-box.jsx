import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eyi56wbdv.css';
import '../../css/k/k4zcok6kq.css';
import '../../css/w/w-c8p7hya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="eyi56wbdv"/><path class="k4zcok6kq"/><path class="w-c8p7hya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:startup-product-rocket-box"} {...others} />);
}

export default Component;
