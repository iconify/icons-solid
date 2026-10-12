import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z7ld48b8v.css';
import '../../css/t/tst6sfblt.css';
import '../../css/c/cofp1obby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z7ld48b8v"/><path class="tst6sfblt"/><path class="cofp1obby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:glasses-duotone"} {...others} />);
}

export default Component;
