import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg8756dje.css';
import '../../css/u/uy2rp8tjn.css';
import '../../css/g/g7pahxd9r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg8756dje wm-k"/><path class="uy2rp8tjn wm-a"/><path class="g7pahxd9r wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:wrap-text"} {...others} />);
}

export default Component;
