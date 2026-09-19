import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vgf0h5e8n.css';

const viewBox = {"width":1024,"height":896};
const content = `<path class="vgf0h5e8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:atari"} {...others} />);
}

export default Component;
