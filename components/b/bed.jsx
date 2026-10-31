import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/c462w-vxo.css';
import '../../css/l/lhhfjfbtf.css';
import '../../css/z/zpodnwj0o.css';
import '../../css/s/s37zulbpr.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="c462w-vxo"/><path class="lhhfjfbtf wm-shine"/><path class="wm-k zpodnwj0o"/><path class="s37zulbpr wm-a"/><path class="w49ngccqq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:bed"} {...others} />);
}

export default Component;
