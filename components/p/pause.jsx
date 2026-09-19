import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/auewfk7pa.css';
import '../../css/o/oxhqg771w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="auewfk7pa"/><path class="oxhqg771w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pause"} {...others} />);
}

export default Component;
