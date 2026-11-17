import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ha4y_4a3w.css';
import '../../css/n/nw8k2pb0z.css';
import '../../css/o/o8yptmbjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ha4y_4a3w"/><path class="nw8k2pb0z"/><path class="o8yptmbjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:layout-grid-plus-duotone"} {...others} />);
}

export default Component;
