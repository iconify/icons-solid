import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i4tdd2b2n.css';
import '../../css/v/v-qjy5b7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="i4tdd2b2n"/><path clip-rule="evenodd" class="v-qjy5b7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shopping-basket-sharp-duotone"} {...others} />);
}

export default Component;
