import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wos-s-4gk.css';
import '../../css/r/rxfy9jprx.css';
import '../../css/h/h3hcrvkyu.css';
import '../../css/s/s4esdgbdl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wos-s-4gk"/><path class="rxfy9jprx"/><path class="h3hcrvkyu"/><path class="s4esdgbdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:two-triangles"} {...others} />);
}

export default Component;
