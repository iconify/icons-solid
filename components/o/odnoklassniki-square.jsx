import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_d_mfb6w.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="p_d_mfb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:odnoklassniki-square"} {...others} />);
}

export default Component;
