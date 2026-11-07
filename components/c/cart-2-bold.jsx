import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6p0bjl9n.css';
import '../../css/r/rkeqi4bgn.css';
import '../../css/d/d6_tdllfl.css';
import '../../css/p/pukxm4taj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s6p0bjl9n"/><path class="rkeqi4bgn"/><path class="d6_tdllfl"/><path class="pukxm4taj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-2-bold"} {...others} />);
}

export default Component;
