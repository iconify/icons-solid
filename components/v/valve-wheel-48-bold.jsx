import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqr8yp28h.css';
import '../../css/b/blas98ktz.css';
import '../../css/m/mbe4uxbkg.css';
import '../../css/w/wrnacwbkm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fqr8yp28h"/><path class="blas98ktz"/><path class="mbe4uxbkg"/><path class="wrnacwbkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:valve-wheel-48-bold"} {...others} />);
}

export default Component;
