import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6dbcrbir.css';
import '../../css/u/ue2e_6o9b.css';
import '../../css/h/h5jg8w4qg.css';
import '../../css/w/w-g2occdx.css';
import '../../css/f/fhf_sobpu.css';
import '../../css/x/x3xrwfbpt.css';
import '../../css/g/ghz3insnl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t6dbcrbir"/><path class="ue2e_6o9b"/><path class="h5jg8w4qg"/><path class="w-g2occdx"/><path class="fhf_sobpu"/><path class="x3xrwfbpt"/><path class="ghz3insnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gossa"} {...others} />);
}

export default Component;
