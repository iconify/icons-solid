import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/e/ezq3zxkis.css';
import '../../css/y/y0dlarb3n.css';
import '../../css/m/mv7_v6hps.css';
import '../../css/q/q8f8vcygc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ezq3zxkis"/><path clip-rule="evenodd" class="y0dlarb3n"/><path class="mv7_v6hps"/><path class="q8f8vcygc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:microscope"} {...others} />);
}

export default Component;
