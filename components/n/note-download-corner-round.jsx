import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esa6zfg6u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="esa6zfg6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:note-download-corner-round"} {...others} />);
}

export default Component;
