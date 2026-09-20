import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qc8efss-r.css';
import '../../css/s/s5tfg_bzk.css';
import '../../css/l/lpv8jrqyx.css';
import '../../css/e/ey005ib1m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qc8efss-r"/><path class="s5tfg_bzk"/><path class="lpv8jrqyx"/><path class="ey005ib1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:smart-tv-and-phone-bold"} {...others} />);
}

export default Component;
