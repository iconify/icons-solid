import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/x9yb94byj.css';
import '../../css/h/hvvdreiju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="x9yb94byj"/><path class="hvvdreiju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shopping-basket-sharp-two-tone"} {...others} />);
}

export default Component;
