import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sc9p2pbgb.css';
import '../../css/f/fox9vr5aw.css';
import '../../css/a/a6e_se6xa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sc9p2pbgb"/><path class="fox9vr5aw"/><path class="a6e_se6xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:de-1x1"} {...others} />);
}

export default Component;
