import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjourqlrz.css';
import '../../css/m/m3hjbacvm.css';
import '../../css/i/icncgac-n.css';
import '../../css/o/ot78axwfe.css';
import '../../css/m/m2xs4r3gn.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xjourqlrz"/><circle class="m3hjbacvm"/><circle class="icncgac-n"/><circle class="ot78axwfe"/><circle class="m2xs4r3gn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:julia-wordmark"} {...others} />);
}

export default Component;
