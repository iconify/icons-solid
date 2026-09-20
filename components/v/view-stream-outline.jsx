import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwa6k3roj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rwa6k3roj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:view-stream-outline"} {...others} />);
}

export default Component;
