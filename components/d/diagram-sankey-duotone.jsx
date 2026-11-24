import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u6k2wgbfk.css';
import '../../css/l/lx2bb-bjy.css';
import '../../css/c/c8yfngb2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u6k2wgbfk"/><path class="lx2bb-bjy"/><path class="c8yfngb2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:diagram-sankey-duotone"} {...others} />);
}

export default Component;
