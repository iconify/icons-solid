import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wdx24_2sp.css';
import '../../css/a/awbucqbpf.css';
import '../../css/t/tsgnk6b9n.css';
import '../../css/p/p77vdobsr.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wdx24_2sp"/><path class="awbucqbpf wm-shine"/><path class="tsgnk6b9n wm-k"/><path class="p77vdobsr wm-a"/><path class="i49wp7b0m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:settings-2"} {...others} />);
}

export default Component;
