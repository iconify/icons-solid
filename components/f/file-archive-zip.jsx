import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/trpx56b8d.css';
import '../../css/l/ldpqcx-5g.css';
import '../../css/n/n_mlvb70n.css';
import '../../css/y/yi6_p1rrj.css';
import '../../css/g/g55ctc6do.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="trpx56b8d"/><path class="ldpqcx-5g"/><path class="n_mlvb70n"/><path class="yi6_p1rrj"/><path class="g55ctc6do"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:file-archive-zip"} {...others} />);
}

export default Component;
