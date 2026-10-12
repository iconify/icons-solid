import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mwl-pp3xj.css';
import '../../css/i/i-xddriwr.css';
import '../../css/b/btakn4b3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mwl-pp3xj"/><path class="i-xddriwr"/><path class="btakn4b3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cup-soda-duotone"} {...others} />);
}

export default Component;
