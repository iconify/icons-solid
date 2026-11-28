import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a8wzwrbnn.css';
import '../../css/o/oql5x6mgu.css';
import '../../css/m/mo_bqojwb.css';
import '../../css/k/k0p15lbfj.css';
import '../../css/g/ga4x5wbsg.css';
import '../../css/v/v6f6kebbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a8wzwrbnn"/><path class="oql5x6mgu"/><path class="mo_bqojwb"/><path class="k0p15lbfj"/><path class="ga4x5wbsg"/><path class="v6f6kebbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:monorail"} {...others} />);
}

export default Component;
