import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktgsm8eun.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ktgsm8eun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:aas-project-tia"} {...others} />);
}

export default Component;
