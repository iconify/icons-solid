import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kc23sabqs.css';
import '../../css/o/o93q9kbmb.css';
import '../../css/n/nb5n93bng.css';
import '../../css/a/ajv4c18wp.css';
import '../../css/f/funk0gbba.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kc23sabqs"/><path class="o93q9kbmb"/><path class="nb5n93bng"/><ellipse transform="rotate(-77.062 215.835 156.947)" class="ajv4c18wp"/><path class="funk0gbba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:spurtingwhale"} {...others} />);
}

export default Component;
