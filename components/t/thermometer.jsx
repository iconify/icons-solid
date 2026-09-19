import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzn-x-bxq.css';
import '../../css/j/j-3o0026v.css';
import '../../css/x/x9mz11vee.css';
import '../../css/w/w34yq1bdg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bzn-x-bxq"/><path class="j-3o0026v"/><ellipse class="x9mz11vee"/><path class="w34yq1bdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:thermometer"} {...others} />);
}

export default Component;
