import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc-6m5bjr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vc-6m5bjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:cart-minus-outline"} {...others} />);
}

export default Component;
