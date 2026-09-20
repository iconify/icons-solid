import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id3e5ebcp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="id3e5ebcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:google-drive-alt"} {...others} />);
}

export default Component;
