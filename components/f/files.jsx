import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8zpfcn6o.css';
import '../../css/u/umo6mlbcr.css';
import '../../css/n/n_y009b4d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x8zpfcn6o"/><path class="umo6mlbcr"/><path class="n_y009b4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:files"} {...others} />);
}

export default Component;
