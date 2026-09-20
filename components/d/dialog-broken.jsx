import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c2m5upb1f.css';
import '../../css/r/rumgkrbdt.css';
import '../../css/y/ye66fobzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c2m5upb1f"/><path class="rumgkrbdt"/><path class="ye66fobzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dialog-broken"} {...others} />);
}

export default Component;
