import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hjibaxbyv.css';
import '../../css/k/k4u0ym-gw.css';
import '../../css/h/heuu9f7yh.css';
import '../../css/r/r15kgybdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hjibaxbyv"/><path class="k4u0ym-gw"/><path class="heuu9f7yh"/><path class="r15kgybdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:chicken-grilled-stream"} {...others} />);
}

export default Component;
