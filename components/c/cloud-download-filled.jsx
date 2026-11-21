import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vl-jafa0z.css';
import '../../css/l/lgw0k4bwd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vl-jafa0z"/><path class="lgw0k4bwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-download-filled"} {...others} />);
}

export default Component;
