import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1ez_g0zb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary q1ez_g0zb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:puzzle-duotone"} {...others} />);
}

export default Component;
