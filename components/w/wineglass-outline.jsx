import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clc8j0pcp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="clc8j0pcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wineglass-outline"} {...others} />);
}

export default Component;
