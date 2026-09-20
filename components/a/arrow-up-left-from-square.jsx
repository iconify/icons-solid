import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mz_qq2r_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mz_qq2r_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:arrow-up-left-from-square"} {...others} />);
}

export default Component;
