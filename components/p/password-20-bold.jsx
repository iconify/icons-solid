import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qf-xb_4oc.css';
import '../../css/h/h-eujcczx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qf-xb_4oc"/><path class="h-eujcczx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:password-20-bold"} {...others} />);
}

export default Component;
