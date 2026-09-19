import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/ojkoemb6l.css';
import '../../css/j/jfa1hib1m.css';
import '../../css/a/abt2d41ld.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ojkoemb6l"/><path class="jfa1hib1m"/><path class="abt2d41ld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:inline"} {...others} />);
}

export default Component;
