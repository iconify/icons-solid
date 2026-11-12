import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g22qdwbvx.css';
import '../../css/j/jahsuebty.css';
import '../../css/d/dcbk0ez8n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g22qdwbvx"/><path class="jahsuebty"/><path class="dcbk0ez8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:marp-light"} {...others} />);
}

export default Component;
