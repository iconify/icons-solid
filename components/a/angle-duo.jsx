import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv819rkth.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rg07q9b9f.css';
import '../../css/g/guparg41d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hv819rkth secondary"/><g class="dt0cm9dhy primary"><path class="rg07q9b9f"/><path class="guparg41d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:angle-duo"} {...others} />);
}

export default Component;
