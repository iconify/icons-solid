import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/fj9cg3sem.css';
import '../../css/d/dla0quf1g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="fj9cg3sem"/><path class="dla0quf1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:dianziqian"} {...others} />);
}

export default Component;
