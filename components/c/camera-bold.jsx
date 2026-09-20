import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8qgik12h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p8qgik12h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:camera-bold"} {...others} />);
}

export default Component;
