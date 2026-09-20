import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3tkxm7_k.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="p3tkxm7_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:surfing"} {...others} />);
}

export default Component;
