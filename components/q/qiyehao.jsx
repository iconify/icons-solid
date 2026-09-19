import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wsm7sg2xz.css';
import '../../css/k/k44y7lcem.css';
import '../../css/j/ju7qmn8fh.css';
import '../../css/z/zgwrrxbqr.css';
import '../../css/m/mwqosqbww.css';
import '../../css/h/h2ilgnizo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="wsm7sg2xz"/><path class="k44y7lcem"/><path class="ju7qmn8fh"/><path class="zgwrrxbqr"/><path class="mwqosqbww"/><path class="h2ilgnizo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:qiyehao"} {...others} />);
}

export default Component;
