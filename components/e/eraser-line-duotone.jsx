import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xmnsxcc-k.css';
import '../../css/t/t4zsdr_id.css';
import '../../css/o/od5ylubiq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xmnsxcc-k"/><path class="t4zsdr_id"/><path class="od5ylubiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:eraser-line-duotone"} {...others} />);
}

export default Component;
