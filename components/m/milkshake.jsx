import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cet4g5u_w.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="cet4g5u_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:milkshake"} {...others} />);
}

export default Component;
