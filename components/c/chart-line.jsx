import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ib5j_-bhr.css';
import '../../css/t/t5_nw5bsz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ib5j_-bhr"/><path class="t5_nw5bsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:chart-line"} {...others} />);
}

export default Component;
