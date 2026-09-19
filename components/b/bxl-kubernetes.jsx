import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4zh9ut5i.css';
import '../../css/j/jumj_bc-f.css';
import '../../css/a/aww_3tzev.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q4zh9ut5i"/><path class="jumj_bc-f"/><path class="aww_3tzev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-kubernetes"} {...others} />);
}

export default Component;
