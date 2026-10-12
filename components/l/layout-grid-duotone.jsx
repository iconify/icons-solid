import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lo81jcbax.css';
import '../../css/f/fpv1krh2n.css';
import '../../css/r/rep89yb0q.css';
import '../../css/t/td0f9bl5n.css';
import '../../css/z/zpni-_b-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lo81jcbax"/><path class="fpv1krh2n"/><path class="rep89yb0q"/><path class="td0f9bl5n"/><path class="zpni-_b-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:layout-grid-duotone"} {...others} />);
}

export default Component;
