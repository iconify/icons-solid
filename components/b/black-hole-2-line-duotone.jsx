import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/d/d-c45hbtt.css';
import '../../css/i/ihlf2jb-v.css';
import '../../css/z/z_ptkubbq.css';
import '../../css/y/yk6o1ybek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="h_tsn8bxt"/><path class="d-c45hbtt"/><path class="ihlf2jb-v"/><path class="z_ptkubbq"/><path class="yk6o1ybek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:black-hole-2-line-duotone"} {...others} />);
}

export default Component;
