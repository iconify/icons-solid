import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dhjw8b08q.css';
import '../../css/d/dorurldnh.css';
import '../../css/l/l07-_1bjq.css';
import '../../css/n/nmq5enqga.css';
import '../../css/e/e-gsjcw2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dhjw8b08q"/><path class="dorurldnh wm-shine"/><path class="l07-_1bjq wm-k"/><path class="nmq5enqga wm-a"/><path class="e-gsjcw2p wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:sailboat"} {...others} />);
}

export default Component;
