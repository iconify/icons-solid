import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmrjxz-dg.css';
import '../../css/r/rq08sniyy.css';
import '../../css/v/vfvta4b8u.css';
import '../../css/n/n8bp42b7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="cmrjxz-dg"/><circle class="rq08sniyy"/><path class="vfvta4b8u"/><path class="n8bp42b7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:yoga"} {...others} />);
}

export default Component;
