import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d2fl3m4rd.css';
import '../../css/c/c2lq5wbok.css';
import '../../css/m/mjuiasbra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d2fl3m4rd"/><path class="c2lq5wbok"/><path class="mjuiasbra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:package-x"} {...others} />);
}

export default Component;
