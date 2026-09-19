import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jw6_mlbat.css';
import '../../css/j/jqdl_kbpa.css';
import '../../css/d/d570ivbba.css';
import '../../css/y/y9ix4cvjl.css';
import '../../css/g/gbnmwrb0h.css';
import '../../css/t/to0_1nb2s.css';
import '../../css/v/voakfwaic.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="jw6_mlbat"/><path class="jqdl_kbpa"/><path class="d570ivbba"/><path class="y9ix4cvjl"/><path class="gbnmwrb0h"/><path class="to0_1nb2s"/><path class="voakfwaic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sound-wave"} {...others} />);
}

export default Component;
