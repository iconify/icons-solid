import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qkm3xcbxk.css';
import '../../css/n/n4iu-sbqo.css';
import '../../css/x/xenr55hzn.css';
import '../../css/s/s_wp055nf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qkm3xcbxk"/><path class="n4iu-sbqo"/><circle class="xenr55hzn"/><circle class="s_wp055nf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:van"} {...others} />);
}

export default Component;
