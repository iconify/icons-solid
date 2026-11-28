import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_z3udbnx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_z3udbnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:circle-6"} {...others} />);
}

export default Component;
