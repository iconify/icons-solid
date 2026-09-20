import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnxi2rbnm.css';
import '../../css/a/acxi8tb9t.css';
import '../../css/n/n0bn3ccoq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wnxi2rbnm"><path class="acxi8tb9t"/><path class="n0bn3ccoq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:wifi-flat"} {...others} />);
}

export default Component;
