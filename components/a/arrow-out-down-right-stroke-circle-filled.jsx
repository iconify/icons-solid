import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6ingvywc.css';
import '../../css/n/n6_fg-lkg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v6ingvywc"/><path class="n6_fg-lkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-down-right-stroke-circle-filled"} {...others} />);
}

export default Component;
