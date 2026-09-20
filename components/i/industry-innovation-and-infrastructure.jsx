import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rzs5w8j-k.css';
import '../../css/h/h2_21zo5p.css';
import '../../css/n/ndbwqxbgs.css';
import '../../css/t/tlghytbfp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="rzs5w8j-k"/><path class="h2_21zo5p"/><path class="ndbwqxbgs"/><path class="tlghytbfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:industry-innovation-and-infrastructure"} {...others} />);
}

export default Component;
