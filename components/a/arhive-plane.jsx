import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jim1fm-xr.css';
import '../../css/q/quffauepo.css';
import '../../css/o/od3qi_b-a.css';
import '../../css/t/t_zbp4u6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jim1fm-xr"/><path class="quffauepo"/><path class="od3qi_b-a"/><path class="t_zbp4u6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-plane"} {...others} />);
}

export default Component;
