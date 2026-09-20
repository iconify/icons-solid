import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpqstnbkt.css';
import '../../css/j/jobm0_deg.css';
import '../../css/u/um_60vbsp.css';
import '../../css/k/k8kt187zo.css';
import '../../css/w/wyu3oubvu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rpqstnbkt"/><path class="jobm0_deg"/><path class="um_60vbsp"/><path class="k8kt187zo"/><path class="wyu3oubvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:crowdsec"} {...others} />);
}

export default Component;
