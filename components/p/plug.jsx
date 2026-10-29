import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m903izb2c.css';
import '../../css/a/agkkf9bgs.css';
import '../../css/h/huqxzg8tr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m903izb2c wm-a"/><path class="agkkf9bgs wm-k"/><path class="huqxzg8tr wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:plug"} {...others} />);
}

export default Component;
