import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gt-b8gb9l.css';
import '../../css/i/ige762y5f.css';
import '../../css/h/hl1uepbsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gt-b8gb9l"/><path class="ige762y5f"/><path class="hl1uepbsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wind-broken"} {...others} />);
}

export default Component;
