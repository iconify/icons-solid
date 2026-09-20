import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhe0-lb_r.css';
import '../../css/j/jw9xiyagq.css';
import '../../css/x/x2w0zw0xi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dhe0-lb_r"/><path class="jw9xiyagq"/><path class="x2w0zw0xi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:phone-vibrate"} {...others} />);
}

export default Component;
