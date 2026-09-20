import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kp_4n9bbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kp_4n9bbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:arrow-up-right-and-arrow-down-left-from-center"} {...others} />);
}

export default Component;
