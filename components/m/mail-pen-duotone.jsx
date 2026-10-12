import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uk8te3bak.css';
import '../../css/g/gnc4ceb8u.css';
import '../../css/v/ve33t5vys.css';
import '../../css/s/sigei6ulc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uk8te3bak"/><path class="gnc4ceb8u"/><path class="ve33t5vys"/><path class="sigei6ulc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mail-pen-duotone"} {...others} />);
}

export default Component;
