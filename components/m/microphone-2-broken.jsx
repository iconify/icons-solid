import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/guj5ndblb.css';
import '../../css/x/x-22ajbkr.css';
import '../../css/z/zqljambho.css';
import '../../css/f/fpr1n1b3q.css';
import '../../css/a/abaosiy3n.css';
import '../../css/o/obcs1cbgf.css';
import '../../css/g/gcs2nkswg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="guj5ndblb"/><path class="x-22ajbkr"/><path class="zqljambho"/><path class="fpr1n1b3q"/><path class="abaosiy3n"/><path class="obcs1cbgf"/><path class="gcs2nkswg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:microphone-2-broken"} {...others} />);
}

export default Component;
