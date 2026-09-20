import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mz90dcccr.css';
import '../../css/z/z472a114k.css';
import '../../css/n/npibm0n8u.css';
import '../../css/t/twy_ekbpf.css';
import '../../css/p/po0uyhbnh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mz90dcccr"/><circle class="z472a114k"/><circle class="npibm0n8u"/><path class="twy_ekbpf"/><path class="po0uyhbnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:palette-2-line-duotone"} {...others} />);
}

export default Component;
