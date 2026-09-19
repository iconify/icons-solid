import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpchaaclv.css';
import '../../css/b/b73r8pbxx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rpchaaclv"/><path class="b73r8pbxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-watson-orders"} {...others} />);
}

export default Component;
