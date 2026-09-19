import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r00m7gbsq.css';
import '../../css/c/c4w4rcmoe.css';
import '../../css/d/d2mzkrbir.css';
import '../../css/i/itc4pfu8l.css';
import '../../css/x/x_n199-gz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="r00m7gbsq"/><path class="c4w4rcmoe"/><path class="d2mzkrbir"/><path class="itc4pfu8l"/><path class="x_n199-gz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:folder-conversion-one"} {...others} />);
}

export default Component;
