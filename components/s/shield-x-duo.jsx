import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e4rcsvbfj.css';
import '../../css/k/k5u3p5bnt.css';
import '../../css/x/xrfn3bcyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="e4rcsvbfj"/><path class="k5u3p5bnt wm-a"/><path class="xrfn3bcyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-x-duo"} {...others} />);
}

export default Component;
