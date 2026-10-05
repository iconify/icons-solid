import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/ri28hvyet.css';
import '../../css/v/vs81s0bpq.css';
import '../../css/t/tbkowycdr.css';
import '../../css/p/pqmpltb_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ri28hvyet"/><path class="vs81s0bpq"/><path class="tbkowycdr"/><path class="pqmpltb_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:bold"} {...others} />);
}

export default Component;
