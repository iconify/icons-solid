import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dnimzpbzq.css';
import '../../css/o/o1-lycc9y.css';
import '../../css/v/v2tabnved.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dnimzpbzq"/><path class="o1-lycc9y"/><path class="v2tabnved"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ruler-duotone"} {...others} />);
}

export default Component;
