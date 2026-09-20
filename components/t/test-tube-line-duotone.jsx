import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dsskz8slx.css';
import '../../css/u/uk6bxm1hn.css';
import '../../css/n/nw_01ubup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dsskz8slx"/><path class="uk6bxm1hn"/><path class="nw_01ubup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:test-tube-line-duotone"} {...others} />);
}

export default Component;
