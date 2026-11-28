import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gkp0p4mnz.css';
import '../../css/x/xzckufbpo.css';
import '../../css/h/h4po3bbim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gkp0p4mnz"/><path class="xzckufbpo"/><path class="h4po3bbim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-moon-rain"} {...others} />);
}

export default Component;
