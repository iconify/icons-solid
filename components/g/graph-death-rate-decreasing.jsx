import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nki8t3b7j.css';
import '../../css/q/qhdy6vbit.css';
import '../../css/m/m5luvtbuz.css';
import '../../css/t/tgrin9b-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nki8t3b7j"/><path class="qhdy6vbit"/><path class="m5luvtbuz"/><path class="tgrin9b-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:graph-death-rate-decreasing"} {...others} />);
}

export default Component;
