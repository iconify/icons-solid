import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kj01djbei.css';
import '../../css/r/rserbo9ln.css';
import '../../css/r/rtivnsbjy.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted kj01djbei"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted rserbo9ln"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-3--alerted rtivnsbjy"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:cog-outline-alerted"} {...others} />);
}

export default Component;
