import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxvv67rcf.css';
import '../../css/g/glsd4_26w.css';
import '../../css/i/ifus-gbsp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hxvv67rcf"/><path class="glsd4_26w"/><path class="ifus-gbsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:love2d"} {...others} />);
}

export default Component;
