import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1_rj_2ly.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p1_rj_2ly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:adjustments-horizontal-solid"} {...others} />);
}

export default Component;
