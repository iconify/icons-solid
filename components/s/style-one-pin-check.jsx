import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mhhvm4b8z.css';
import '../../css/b/bjgbq_xpr.css';
import '../../css/n/n9r1-hobq.css';
import '../../css/m/mocyy1bkc.css';
import '../../css/b/bq1aqpbzq.css';
import '../../css/a/amv_rabfc.css';
import '../../css/d/dpc2dvbfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mhhvm4b8z"/><path class="bjgbq_xpr"/><path class="n9r1-hobq"/><path class="mocyy1bkc"/><path class="bq1aqpbzq"/><path class="amv_rabfc"/><path class="dpc2dvbfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:style-one-pin-check"} {...others} />);
}

export default Component;
