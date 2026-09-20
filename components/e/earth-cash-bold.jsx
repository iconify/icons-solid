import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzejfbbgu.css';
import '../../css/s/s0q6m7bvk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mzejfbbgu"/><path class="s0q6m7bvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:earth-cash-bold"} {...others} />);
}

export default Component;
