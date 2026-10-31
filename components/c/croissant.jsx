import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us0u3x3yq.css';
import '../../css/i/i6wydjbva.css';
import '../../css/d/dk54v-gay.css';
import '../../css/s/s1ie28b-p.css';
import '../../css/f/fy4jxibwk.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="us0u3x3yq"/><path class="i6wydjbva"/><path class="dk54v-gay"/><path class="s1ie28b-p"/><path class="fy4jxibwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:croissant"} {...others} />);
}

export default Component;
