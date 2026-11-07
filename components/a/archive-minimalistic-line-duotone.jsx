import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l1cob4bep.css';
import '../../css/w/wqs3cnbmu.css';
import '../../css/i/iscitzuxy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l1cob4bep"/><path class="wqs3cnbmu"/><path class="iscitzuxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-minimalistic-line-duotone"} {...others} />);
}

export default Component;
