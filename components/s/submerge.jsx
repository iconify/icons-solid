import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u0c9hej4a.css';
import '../../css/p/pbd07ubhl.css';
import '../../css/h/hyww7bdrb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="u0c9hej4a"/><path class="pbd07ubhl"/><path class="hyww7bdrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:submerge"} {...others} />);
}

export default Component;
