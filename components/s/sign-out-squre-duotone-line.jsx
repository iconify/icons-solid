import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7pkxcccs.css';
import '../../css/k/k4rjlac_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g7pkxcccs"/><path class="k4rjlac_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sign-out-squre-duotone-line"} {...others} />);
}

export default Component;
