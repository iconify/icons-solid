import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jjq2qh_fp.css';
import '../../css/x/xn4zvpbmt.css';
import '../../css/l/lhx-r4bhy.css';
import '../../css/s/sgjshnbod.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jjq2qh_fp"/><path class="xn4zvpbmt"/><path class="lhx-r4bhy"/><path class="sgjshnbod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:document-text-line-duotone"} {...others} />);
}

export default Component;
