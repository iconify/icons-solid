import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqdl70b_g.css';
import '../../css/s/st9n28bpc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nqdl70b_g"/><path class="st9n28bpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fridge-20"} {...others} />);
}

export default Component;
