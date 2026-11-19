import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/axub9ab_d.css';
import '../../css/l/lt8bj64mz.css';
import '../../css/h/hrcfinwcf.css';
import '../../css/d/dn_2bcc-b.css';
import '../../css/x/xgticab4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="axub9ab_d"/><path class="lt8bj64mz"/><path class="hrcfinwcf"/><circle class="dn_2bcc-b"/><path class="xgticab4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-clock"} {...others} />);
}

export default Component;
