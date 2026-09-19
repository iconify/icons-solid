import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9wlk_bia.css';
import '../../css/m/mnoez5byt.css';
import '../../css/s/s30ds6b3n.css';
import '../../css/b/bsib84i4l.css';
import '../../css/l/l7xcnxbzp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j9wlk_bia"/><path class="mnoez5byt"/><path class="s30ds6b3n"/><path class="bsib84i4l"/><path class="l7xcnxbzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:softicecream"} {...others} />);
}

export default Component;
