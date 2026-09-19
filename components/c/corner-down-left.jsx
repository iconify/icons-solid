import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/f/fxx58-o_d.css';
import '../../css/c/ctj1zzbla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="fxx58-o_d"/><path class="ctj1zzbla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:corner-down-left"} {...others} />);
}

export default Component;
