import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zem31bbhr.css';
import '../../css/d/d72y-xbjv.css';
import '../../css/j/jinalvbrx.css';
import '../../css/t/tm3f2gb8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zem31bbhr"/><path class="d72y-xbjv"/><path class="jinalvbrx"/><path class="tm3f2gb8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:container-linear"} {...others} />);
}

export default Component;
