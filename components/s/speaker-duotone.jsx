import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pihw0xj_y.css';
import '../../css/v/v28la4rjs.css';
import '../../css/b/b1yeqac8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pihw0xj_y"/><path class="v28la4rjs"/><path class="b1yeqac8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:speaker-duotone"} {...others} />);
}

export default Component;
