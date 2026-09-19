import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/z7h968sdf.css';
import '../../css/g/gzg1hnq0v.css';
import '../../css/q/qzib17bxr.css';
import '../../css/a/a8nznqbqt.css';
import '../../css/x/xqfqqtbmc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="z7h968sdf"/><path class="gzg1hnq0v"/><path class="qzib17bxr"/><path class="a8nznqbqt"/><path class="xqfqqtbmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:children-pyramid"} {...others} />);
}

export default Component;
