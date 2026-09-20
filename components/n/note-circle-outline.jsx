import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1b9w0esc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y1b9w0esc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:note-circle-outline"} {...others} />);
}

export default Component;
