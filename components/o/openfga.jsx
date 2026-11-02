import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxs7g9ljm.css';

const viewBox = {"width":463,"height":463};
const content = `<path class="sxs7g9ljm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:openfga"} {...others} />);
}

export default Component;
