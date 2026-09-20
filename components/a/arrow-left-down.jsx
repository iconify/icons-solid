import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlbjazb5r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xlbjazb5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:arrow-left-down"} {...others} />);
}

export default Component;
