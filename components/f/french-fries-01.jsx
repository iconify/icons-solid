import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xktvohbrl.css';
import '../../css/m/m8l8w3o9n.css';
import '../../css/s/srykvsb6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xktvohbrl"/><path class="m8l8w3o9n"/><path class="srykvsb6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:french-fries-01"} {...others} />);
}

export default Component;
