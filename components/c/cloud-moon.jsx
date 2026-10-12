import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xsd6vbhqo.css';
import '../../css/m/mnt8w2b3i.css';
import '../../css/b/bfx4sfbis.css';
import '../../css/c/cm2cxzddq.css';
import '../../css/o/o2nzstbtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xsd6vbhqo"/><path class="mnt8w2b3i"/><path class="bfx4sfbis"/><path class="cm2cxzddq"/><path class="o2nzstbtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-moon"} {...others} />);
}

export default Component;
