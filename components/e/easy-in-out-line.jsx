import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_e2u0buw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_e2u0buw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:easy-in-out-line"} {...others} />);
}

export default Component;
