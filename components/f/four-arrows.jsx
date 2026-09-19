import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/emtz1ubnb.css';
import '../../css/t/t2fgsdhbf.css';
import '../../css/q/qchprrkxl.css';
import '../../css/s/srzob-b0j.css';
import '../../css/o/of-q9pmki.css';
import '../../css/b/badolhfhj.css';
import '../../css/w/w58s68pof.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="emtz1ubnb"/><path class="t2fgsdhbf"/><path class="qchprrkxl"/><path class="srzob-b0j"/><path class="of-q9pmki"/><path class="badolhfhj"/><path class="w58s68pof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:four-arrows"} {...others} />);
}

export default Component;
