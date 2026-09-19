import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/d/dq9l1yu4e.css';
import '../../css/a/aqj23kbhz.css';
import '../../css/s/slwiivbuz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="dq9l1yu4e"/><path class="aqj23kbhz"/><path class="slwiivbuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:alignment-vertical-center"} {...others} />);
}

export default Component;
