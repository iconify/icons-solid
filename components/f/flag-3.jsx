import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tjawzsb4y.css';
import '../../css/p/pdkgkyb6c.css';
import '../../css/q/qd6mgbbws.css';
import '../../css/i/ilp7cotte.css';
import '../../css/q/qm6k3bcej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tjawzsb4y"/><path class="pdkgkyb6c"/><path class="qd6mgbbws"/><path class="ilp7cotte"/><path class="qm6k3bcej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:flag-3"} {...others} />);
}

export default Component;
