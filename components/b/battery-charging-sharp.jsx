import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7q87o6mu.css';
import '../../css/m/mnrm0dbsd.css';
import '../../css/d/dir4mc3_p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u7q87o6mu"/><path class="mnrm0dbsd"/><path class="dir4mc3_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:battery-charging-sharp"} {...others} />);
}

export default Component;
