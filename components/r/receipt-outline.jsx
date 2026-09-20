import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh-pk_b0s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="yh-pk_b0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:receipt-outline"} {...others} />);
}

export default Component;
