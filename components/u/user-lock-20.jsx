import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9-5dabgd.css';
import '../../css/x/x-j00pe6r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p9-5dabgd"/><path class="x-j00pe6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-lock-20"} {...others} />);
}

export default Component;
