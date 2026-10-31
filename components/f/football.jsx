import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dvjdoibep.css';
import '../../css/d/db9jeob8v.css';
import '../../css/u/uch55rsgo.css';
import '../../css/v/vh5fw88hk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dvjdoibep"/><path class="db9jeob8v wm-shine"/><path class="uch55rsgo wm-k"/><path class="vh5fw88hk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:football"} {...others} />);
}

export default Component;
