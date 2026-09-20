import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9pqesbwr.css';
import '../../css/e/ejsqasb_h.css';
import '../../css/b/bohr7wxep.css';
import '../../css/h/hxbsfkehs.css';

const viewBox = {"width":300,"height":180};
const content = `<g class="a9pqesbwr"><path class="ejsqasb_h"/><path class="bohr7wxep"/><path class="hxbsfkehs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:monkeytype"} {...others} />);
}

export default Component;
