import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfja0b30f.css';
import '../../css/e/en06yf5_q.css';
import '../../css/q/q290k1p3z.css';
import '../../css/n/n71meqx1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lfja0b30f"/><path class="en06yf5_q"/><path class="q290k1p3z"/><path class="n71meqx1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-square-bold-duotone"} {...others} />);
}

export default Component;
