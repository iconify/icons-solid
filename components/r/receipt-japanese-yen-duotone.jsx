import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ernxwjbbg.css';
import '../../css/g/g48c9l9px.css';
import '../../css/a/awesmtr4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ernxwjbbg"/><path class="g48c9l9px"/><path class="awesmtr4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:receipt-japanese-yen-duotone"} {...others} />);
}

export default Component;
