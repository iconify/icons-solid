import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/seqqtgvjw.css';
import '../../css/q/qn3lerbjv.css';
import '../../css/i/iuf-5bc8u.css';
import '../../css/v/v_c3opbqy.css';
import '../../css/a/a88452bcz.css';
import '../../css/m/mriwfkb0n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="seqqtgvjw"/><path class="qn3lerbjv"/><path class="iuf-5bc8u"/><path class="v_c3opbqy"/><path class="a88452bcz"/><path class="mriwfkb0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mindmap-list"} {...others} />);
}

export default Component;
