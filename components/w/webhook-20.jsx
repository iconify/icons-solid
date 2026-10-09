import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir2g77-jy.css';
import '../../css/f/faoz8ravc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ir2g77-jy"/><path class="faoz8ravc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:webhook-20"} {...others} />);
}

export default Component;
