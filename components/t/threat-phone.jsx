import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydne_bc6v.css';
import '../../css/s/s3h4t0s3m.css';
import '../../css/p/pis0fhy6q.css';
import '../../css/m/mw888c37v.css';
import '../../css/v/v0mvd3b6j.css';
import '../../css/q/qu8wsy_pf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ydne_bc6v"><path class="s3h4t0s3m"/><path class="pis0fhy6q"/><path class="mw888c37v"/><path class="v0mvd3b6j"/><path class="qu8wsy_pf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:threat-phone"} {...others} />);
}

export default Component;
