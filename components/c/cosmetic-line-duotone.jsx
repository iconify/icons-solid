import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ngrd8yb3c.css';
import '../../css/l/ls5k_6bia.css';
import '../../css/w/wj1odio5f.css';
import '../../css/z/z37iwiaad.css';
import '../../css/h/hilvglq7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ngrd8yb3c"/><path class="ls5k_6bia"/><path class="wj1odio5f"/><path class="z37iwiaad"/><path class="hilvglq7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cosmetic-line-duotone"} {...others} />);
}

export default Component;
