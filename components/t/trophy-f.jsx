import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttjdx3xxm.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-2};
const content = `<path class="ttjdx3xxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:trophy-f"} {...others} />);
}

export default Component;
