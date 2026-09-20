import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bm1pdl_ir.css';
import '../../css/u/un1o5acxp.css';
import '../../css/o/o3-olb8sj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bm1pdl_ir"/><path class="un1o5acxp"/><path class="o3-olb8sj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bottle"} {...others} />);
}

export default Component;
