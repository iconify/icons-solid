import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqq9dubwh.css';
import '../../css/n/n7rbjbcnv.css';
import '../../css/v/vtyw38b5j.css';
import '../../css/r/rwwit473d.css';
import '../../css/q/qc622mbzm.css';
import '../../css/s/s143d0bhg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="yqq9dubwh"/><rect class="n7rbjbcnv"/><rect class="vtyw38b5j"/><rect class="rwwit473d"/><path class="qc622mbzm"/><path class="s143d0bhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:swap"} {...others} />);
}

export default Component;
