import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/ka16ahzxe.css';
import '../../css/m/mgi3zn3tq.css';
import '../../css/u/u296q5x9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ka16ahzxe"/><path class="mgi3zn3tq"/><path class="u296q5x9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-case-broken"} {...others} />);
}

export default Component;
