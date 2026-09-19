import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tw13_eb9q.css';
import '../../css/z/z_0_21r3m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="tw13_eb9q"/><path class="z_0_21r3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:coat-hanger"} {...others} />);
}

export default Component;
