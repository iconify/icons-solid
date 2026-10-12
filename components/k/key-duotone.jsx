import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ukz87w37f.css';
import '../../css/c/c15q2jbtz.css';
import '../../css/h/hnmvecxnc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ukz87w37f"/><path class="c15q2jbtz"/><path class="hnmvecxnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:key-duotone"} {...others} />);
}

export default Component;
