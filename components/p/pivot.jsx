import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mkb8f--qc.css';
import '../../css/m/mtyu7acbi.css';
import '../../css/q/q-5aj45wj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mkb8f--qc"/><path class="mtyu7acbi"/><path class="q-5aj45wj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pivot"} {...others} />);
}

export default Component;
