import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwg6iibbx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wwg6iibbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:yoga-bridge-pose-2"} {...others} />);
}

export default Component;
