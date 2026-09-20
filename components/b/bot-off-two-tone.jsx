import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oy4h8qb7d.css';
import '../../css/v/vb31y2bry.css';
import '../../css/n/n-xh2vi9p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oy4h8qb7d"/><path class="vb31y2bry"/><path class="n-xh2vi9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bot-off-two-tone"} {...others} />);
}

export default Component;
