import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s_vwjo4de.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/u/udqu4n_ci.css';
import '../../css/e/e39p62u0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="s_vwjo4de"/><path class="qr4ochb5c wm-s"/><path class="udqu4n_ci"/><path class="e39p62u0b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:map-pin-off-duo"} {...others} />);
}

export default Component;
