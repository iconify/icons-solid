import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/ve33t5vys.css';
import '../../css/q/q050sk4js.css';
import '../../css/s/sigei6ulc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ve33t5vys"/><path class="q050sk4js"/><path class="sigei6ulc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mail-duotone"} {...others} />);
}

export default Component;
