import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sd0sbwb6c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sd0sbwb6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:file-download-corner-round"} {...others} />);
}

export default Component;
