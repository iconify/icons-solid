import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byfb40b_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="byfb40b_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:triangle-right"} {...others} />);
}

export default Component;
