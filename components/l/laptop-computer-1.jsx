import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-jv80k-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="y-jv80k-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:laptop-computer-1"} {...others} />);
}

export default Component;
