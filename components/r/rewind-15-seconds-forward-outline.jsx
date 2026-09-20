import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4fy3wbjp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x4fy3wbjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rewind-15-seconds-forward-outline"} {...others} />);
}

export default Component;
