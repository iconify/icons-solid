import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sot2k_elk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sot2k_elk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:grill-off"} {...others} />);
}

export default Component;
