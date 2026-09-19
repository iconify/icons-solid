import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rnklyrfrw.css';
import '../../css/k/k51n74bqf.css';
import '../../css/g/g4ut-jbsr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="rnklyrfrw"/><path class="k51n74bqf"/><path class="g4ut-jbsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:logout"} {...others} />);
}

export default Component;
