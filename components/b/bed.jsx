import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6eue1_ca.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t6eue1_ca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bed"} {...others} />);
}

export default Component;
