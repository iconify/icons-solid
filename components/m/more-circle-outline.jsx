import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od72l_b0n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="od72l_b0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:more-circle-outline"} {...others} />);
}

export default Component;
