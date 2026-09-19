import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/a3uxz3buo.css';
import '../../css/v/vrylp1bhj.css';
import '../../css/c/cngj3qbjb.css';
import '../../css/m/mpxen5bpg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="a3uxz3buo"/><path class="vrylp1bhj"/><path class="cngj3qbjb"/><path class="mpxen5bpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:message-success"} {...others} />);
}

export default Component;
