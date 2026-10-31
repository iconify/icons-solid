import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kojh02b5g.css';
import '../../css/w/wlfqy-bxm.css';
import '../../css/g/gighltbwr.css';
import '../../css/b/b4d1e6bie.css';
import '../../css/w/wcpe8eb7b.css';
import '../../css/e/e78k15v9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="kojh02b5g"/><path class="wlfqy-bxm"/><path class="gighltbwr wm-shine"/><path class="b4d1e6bie wm-k"/><path class="wcpe8eb7b wm-a"/><path class="e78k15v9f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:car-front"} {...others} />);
}

export default Component;
