import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8wtggbuj.css';
import '../../css/r/r7cq4bfcx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k8wtggbuj"/><path class="r7cq4bfcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:traffic-incident"} {...others} />);
}

export default Component;
