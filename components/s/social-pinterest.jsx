import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj6s_8m8d.css';

const viewBox = {"width":768,"height":976};
const content = `<path class="hj6s_8m8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:social-pinterest"} {...others} />);
}

export default Component;
