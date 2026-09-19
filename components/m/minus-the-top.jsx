import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/igmxyr3ue.css';
import '../../css/i/iceko5bhy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="igmxyr3ue"/><path class="iceko5bhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:minus-the-top"} {...others} />);
}

export default Component;
