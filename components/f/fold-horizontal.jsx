import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4ttsc5cl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w4ttsc5cl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:fold-horizontal"} {...others} />);
}

export default Component;
