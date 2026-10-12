import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxx7xlcnt.css';
import '../../css/q/qf2bm2bmv.css';
import '../../css/q/q6ex2lbku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yxx7xlcnt"/><path class="qf2bm2bmv"/><path class="q6ex2lbku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-heart"} {...others} />);
}

export default Component;
