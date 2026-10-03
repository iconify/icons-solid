import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew16t5bon.css';
import '../../css/m/mfhjfna5c.css';
import '../../css/b/b3g89hl7j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ew16t5bon"/><path class="mfhjfna5c"/><path class="b3g89hl7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:homedex"} {...others} />);
}

export default Component;
