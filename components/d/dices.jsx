import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/ny-r4ppyn.css';
import '../../css/d/d2by5bbzf.css';
import '../../css/n/n_f93k4ny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ny-r4ppyn wm-k"/><path class="d2by5bbzf wm-a"/><path class="n_f93k4ny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:dices"} {...others} />);
}

export default Component;
