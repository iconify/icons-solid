import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zav3-ob_j.css';
import '../../css/m/m6r4ncclr.css';
import '../../css/u/ua1yalooh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k zav3-ob_j"/><path class="m6r4ncclr wm-a"/><path class="ua1yalooh wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:hash"} {...others} />);
}

export default Component;
