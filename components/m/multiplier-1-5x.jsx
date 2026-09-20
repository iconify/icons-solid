import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcruj4cal.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vcruj4cal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:multiplier-1-5x"} {...others} />);
}

export default Component;
