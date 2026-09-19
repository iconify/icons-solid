import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/n/nyv9n775i.css';
import '../../css/r/rvrrow_wg.css';
import '../../css/k/kd4brcc1s.css';
import '../../css/o/o6-y1ybfd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="nyv9n775i"/><path class="rvrrow_wg"/><path class="kd4brcc1s"/><path class="o6-y1ybfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:middle-finger"} {...others} />);
}

export default Component;
