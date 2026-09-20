import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lbdkbebfz.css';
import '../../css/l/lqm65lzzw.css';
import '../../css/b/btea2sv2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lbdkbebfz"/><path class="lqm65lzzw"/><path class="btea2sv2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:beetle-scarab"} {...others} />);
}

export default Component;
