import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d64-tcb5u.css';

const viewBox = {"width":400,"height":488};
const content = `<path class="d64-tcb5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:scribd"} {...others} />);
}

export default Component;
