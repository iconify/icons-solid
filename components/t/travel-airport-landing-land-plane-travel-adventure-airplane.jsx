import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2t3gzbxm.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="e2t3gzbxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-airport-landing-land-plane-travel-adventure-airplane"} {...others} />);
}

export default Component;
