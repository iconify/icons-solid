import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yp6w4xkla.css';
import '../../css/n/nosf4_bnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yp6w4xkla"/><path class="nosf4_bnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bell-plus-duotone"} {...others} />);
}

export default Component;
