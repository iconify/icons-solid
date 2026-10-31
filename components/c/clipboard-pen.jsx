import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/w0z479bro.css';
import '../../css/i/ixw7lfekk.css';
import '../../css/i/ie1x0hbmj.css';
import '../../css/j/jljkj-bjl.css';
import '../../css/p/p88jhsbpe.css';
import '../../css/h/hv63gzbxq.css';
import '../../css/w/w-e2yruex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="w0z479bro"/><path class="ixw7lfekk wm-s"/><path class="ie1x0hbmj wm-shine"/><path class="jljkj-bjl wm-k"/><path class="p88jhsbpe wm-a"/><path class="hv63gzbxq wm-s"/><path class="w-e2yruex wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:clipboard-pen"} {...others} />);
}

export default Component;
