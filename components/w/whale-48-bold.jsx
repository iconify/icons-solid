import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2orpdgfk.css';
import '../../css/a/aaayorbpv.css';
import '../../css/h/hh899vp3z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s2orpdgfk"/><path class="aaayorbpv"/><path class="hh899vp3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:whale-48-bold"} {...others} />);
}

export default Component;
