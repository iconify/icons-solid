import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6_fg-lkg.css';
import '../../css/i/i9urgub_t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n6_fg-lkg"/><path class="i9urgub_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-down-right-stroke-square-filled"} {...others} />);
}

export default Component;
