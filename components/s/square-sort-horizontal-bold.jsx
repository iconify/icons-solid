import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu99u_15k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qu99u_15k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-sort-horizontal-bold"} {...others} />);
}

export default Component;
