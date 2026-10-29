import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/naq-blbtv.css';
import '../../css/l/l-0qc5b4i.css';
import '../../css/s/spe1s4bal.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="naq-blbtv wm-k"/><path class="l-0qc5b4i wm-k"/><path class="spe1s4bal wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cloud-upload"} {...others} />);
}

export default Component;
