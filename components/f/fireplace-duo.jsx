import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l9djeq8yk.css';
import '../../css/j/jrfoe58yb.css';
import '../../css/d/dg5kmnbiz.css';
import '../../css/p/pfodkzbrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="l9djeq8yk"/><path class="jrfoe58yb wm-a"/><path class="dg5kmnbiz wm-a"/><path class="pfodkzbrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fireplace-duo"} {...others} />);
}

export default Component;
