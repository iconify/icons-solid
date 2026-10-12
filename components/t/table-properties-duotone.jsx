import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-90k78cl.css';
import '../../css/b/b72brhbir.css';
import '../../css/n/n2wg6g7jo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m-90k78cl"/><path class="b72brhbir"/><path class="n2wg6g7jo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:table-properties-duotone"} {...others} />);
}

export default Component;
