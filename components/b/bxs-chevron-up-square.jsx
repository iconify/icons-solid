import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg-d_yb6d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mg-d_yb6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-chevron-up-square"} {...others} />);
}

export default Component;
