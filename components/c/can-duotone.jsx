import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/osa774bht.css';
import '../../css/y/yh1jv4bwi.css';
import '../../css/r/r0ymitb5z.css';
import '../../css/y/ygm0plb9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="osa774bht"/><path class="yh1jv4bwi"/><path class="r0ymitb5z"/><path class="ygm0plb9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:can-duotone"} {...others} />);
}

export default Component;
