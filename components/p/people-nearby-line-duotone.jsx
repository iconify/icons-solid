import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nborjbb0w.css';
import '../../css/z/zwbr9ihxn.css';
import '../../css/d/dicuxcbax.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nborjbb0w"/><path class="zwbr9ihxn"/><path class="dicuxcbax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:people-nearby-line-duotone"} {...others} />);
}

export default Component;
