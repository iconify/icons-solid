import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o8cx4wb3w.css';
import '../../css/a/ajbec7b6f.css';
import '../../css/n/nl6t94d5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o8cx4wb3w"/><path clip-rule="evenodd" class="ajbec7b6f"/><path class="nl6t94d5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:map-pinned-duotone"} {...others} />);
}

export default Component;
