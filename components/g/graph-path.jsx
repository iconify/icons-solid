import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w38g40bvp.css';
import '../../css/c/cq3t79bqd.css';
import '../../css/m/m-2o9kbye.css';
import '../../css/g/gwbv7zb2x.css';
import '../../css/p/pxjisubfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w38g40bvp"/><circle class="cq3t79bqd"/><circle class="m-2o9kbye"/><circle class="gwbv7zb2x"/><circle class="pxjisubfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:graph-path"} {...others} />);
}

export default Component;
