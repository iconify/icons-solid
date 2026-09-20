import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/gjbgqzbaj.css';
import '../../css/f/f_715hp0d.css';
import '../../css/m/m3u_gq9gc.css';
import '../../css/m/mzxrl8bvs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="gjbgqzbaj"/><path class="f_715hp0d"/><path class="m3u_gq9gc"/><path class="mzxrl8bvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:empty-clipboard"} {...others} />);
}

export default Component;
