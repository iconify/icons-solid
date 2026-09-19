import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/l_s_lhazf.css';
import '../../css/k/kxy--vgcs.css';
import '../../css/w/w4y77ofbd.css';
import '../../css/j/jw3a00bvy.css';
import '../../css/v/vh_84dbsq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="l_s_lhazf"/><path class="kxy--vgcs"/><rect class="w4y77ofbd"/><path class="jw3a00bvy"/><path class="vh_84dbsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:command"} {...others} />);
}

export default Component;
