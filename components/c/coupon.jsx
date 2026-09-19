import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us5tv89ee.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="us5tv89ee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:coupon"} {...others} />);
}

export default Component;
