import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f43n_498d.css';
import '../../css/r/r_yzpyu7i.css';
import '../../css/u/u9-gi0b-r.css';
import '../../css/i/i2snpo6py.css';
import '../../css/x/xl3huwb-s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f43n_498d"/><path class="r_yzpyu7i"/><path class="u9-gi0b-r"/><path class="i2snpo6py"/><path class="xl3huwb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:rooster"} {...others} />);
}

export default Component;
