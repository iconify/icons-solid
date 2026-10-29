import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvh9a2pzk.css';
import '../../css/h/hgwnlybsl.css';
import '../../css/e/e_2p_w-co.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gvh9a2pzk"/><path class="hgwnlybsl"/><path class="e_2p_w-co"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:inbox"} {...others} />);
}

export default Component;
