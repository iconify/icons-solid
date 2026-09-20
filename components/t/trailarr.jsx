import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhc6si7sd.css';
import '../../css/e/eon83uilw.css';
import '../../css/b/b9q5u9ytg.css';
import '../../css/y/ydeep_bhd.css';
import '../../css/h/h188_u_6b.css';
import '../../css/q/qdch6oblc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fhc6si7sd"/><path class="eon83uilw"/><path class="b9q5u9ytg"/><path class="ydeep_bhd"/><path class="h188_u_6b"/><path class="qdch6oblc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:trailarr"} {...others} />);
}

export default Component;
