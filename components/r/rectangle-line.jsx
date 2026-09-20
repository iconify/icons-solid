import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kva4mxbcl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kva4mxbcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:rectangle-line"} {...others} />);
}

export default Component;
