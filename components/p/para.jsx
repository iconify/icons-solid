import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t--a6rbsb.css';
import '../../css/r/r1oc-kbvk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t--a6rbsb"/><path class="r1oc-kbvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:para"} {...others} />);
}

export default Component;
