import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk1lweb0u.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="qk1lweb0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:wheelchair"} {...others} />);
}

export default Component;
