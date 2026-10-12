import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ts0-xfmio.css';
import '../../css/w/wj_a43n2k.css';
import '../../css/m/m7z8xbcse.css';
import '../../css/o/odo2s3bme.css';
import '../../css/o/o9i8dnbvg.css';
import '../../css/x/xrrkxolyg.css';
import '../../css/y/yfh-pccin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="ts0-xfmio"/><rect class="wj_a43n2k"/><rect class="m7z8xbcse"/><path class="odo2s3bme"/><rect class="o9i8dnbvg"/><path class="xrrkxolyg"/><path class="yfh-pccin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:combine"} {...others} />);
}

export default Component;
