import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hoqmwc11w.css';
import '../../css/n/nb9d1ibpa.css';
import '../../css/f/fseys5djj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hoqmwc11w"/><path class="nb9d1ibpa"/><path class="fseys5djj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:octagon-x-duotone"} {...others} />);
}

export default Component;
