import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/klx501brv.css';
import '../../css/q/qw3e2lbsa.css';
import '../../css/i/inc70qb-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="klx501brv"/><path class="qw3e2lbsa"/><path class="inc70qb-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:style-two-pin-home"} {...others} />);
}

export default Component;
