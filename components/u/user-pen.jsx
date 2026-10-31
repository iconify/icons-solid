import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vvoy_2top.css';
import '../../css/i/ixw7lfekk.css';
import '../../css/y/yl4ye3b4n.css';
import '../../css/l/ljeitrr-k.css';
import '../../css/h/hv63gzbxq.css';
import '../../css/b/blawizb7e.css';
import '../../css/e/evjjbybyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="vvoy_2top"/><path class="ixw7lfekk wm-s"/><path class="wm-shine yl4ye3b4n"/><path class="ljeitrr-k wm-k"/><path class="hv63gzbxq wm-s"/><path class="blawizb7e"/><path class="evjjbybyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:user-pen"} {...others} />);
}

export default Component;
