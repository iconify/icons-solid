import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/loji95m6e.css';
import '../../css/j/j10ksqbpm.css';
import '../../css/x/x6bc1350x.css';
import '../../css/e/em5bsmbgk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="h01tyzbfu"><path class="loji95m6e"/><path class="j10ksqbpm"/><path class="x6bc1350x"/><path class="em5bsmbgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:multicast"} {...others} />);
}

export default Component;
