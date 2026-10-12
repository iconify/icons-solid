import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q64lebc_s.css';
import '../../css/k/kvlb9jb7n.css';
import '../../css/j/jcsum9_io.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q64lebc_s"/><path class="kvlb9jb7n"/><path class="jcsum9_io"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:book-open-text-duotone"} {...others} />);
}

export default Component;
