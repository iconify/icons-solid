import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx3fe_t0r.css';
import '../../css/r/rj_m6ufoq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kx3fe_t0r"/><path class="rj_m6ufoq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-italic-bold-duotone"} {...others} />);
}

export default Component;
