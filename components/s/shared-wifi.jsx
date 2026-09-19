import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y9lk8-blp.css';
import '../../css/k/krpz13i1y.css';
import '../../css/u/uvaq53bno.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y9lk8-blp"/><path class="krpz13i1y"/><path class="uvaq53bno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shared-wifi"} {...others} />);
}

export default Component;
