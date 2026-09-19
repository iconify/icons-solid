import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hx47j0bao.css';
import '../../css/i/iwju4kbrs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="hx47j0bao"/><path class="iwju4kbrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:double-left"} {...others} />);
}

export default Component;
