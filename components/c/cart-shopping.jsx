import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lw7rcr6sy.css';
import '../../css/k/ki4o1yb-o.css';
import '../../css/y/y2fri503s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lw7rcr6sy"/><circle class="ki4o1yb-o"/><circle class="y2fri503s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:cart-shopping"} {...others} />);
}

export default Component;
