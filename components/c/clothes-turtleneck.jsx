import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/p832xibgf.css';
import '../../css/d/d8l6oj8vr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="p832xibgf"/><path class="d8l6oj8vr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clothes-turtleneck"} {...others} />);
}

export default Component;
