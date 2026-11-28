import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dov2pdbuq.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h_2abro7x.css';
import '../../css/n/nv6nssw1g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dov2pdbuq secondary"/><g class="dt0cm9dhy primary"><path class="h_2abro7x"/><path class="nv6nssw1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-big-up-dash-duo"} {...others} />);
}

export default Component;
