import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jzb6ijkjp.css';
import '../../css/t/tqb_6nb6c.css';
import '../../css/b/b0fhntbag.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="jzb6ijkjp"/><circle class="tqb_6nb6c"/><path class="b0fhntbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:node-square"} {...others} />);
}

export default Component;
