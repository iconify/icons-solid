import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn2thbb_r.css';
import '../../css/p/pbr8cipxb.css';
import '../../css/c/cf7crkx6v.css';
import '../../css/u/udhws4j8w.css';
import '../../css/f/fs_353-hf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nn2thbb_r wm-k"/><path class="pbr8cipxb wm-k"/><path class="cf7crkx6v wm-a"/><path class="udhws4j8w wm-a"/><path class="fs_353-hf wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:repeat-1"} {...others} />);
}

export default Component;
