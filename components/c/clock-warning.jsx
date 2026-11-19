import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/orgd3h8gq.css';
import '../../css/q/qkslehbxy.css';
import '../../css/l/lx_j5lb4z.css';
import '../../css/y/ya2z7wbab.css';
import '../../css/z/z9n3o0bos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="orgd3h8gq"/><path class="qkslehbxy"/><circle class="lx_j5lb4z"/><path class="ya2z7wbab"/><path class="z9n3o0bos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clock-warning"} {...others} />);
}

export default Component;
