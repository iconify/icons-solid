import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqa593wdp.css';
import '../../css/o/ocnv6pbzx.css';
import '../../css/u/unk-nx60q.css';
import '../../css/k/kzhs64u9l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pqa593wdp wm-a"/><path class="ocnv6pbzx wm-k"/><path class="unk-nx60q wm-k"/><path class="kzhs64u9l wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:flag"} {...others} />);
}

export default Component;
