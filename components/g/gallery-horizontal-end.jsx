import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1lo5lbfb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q1lo5lbfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gallery-horizontal-end"} {...others} />);
}

export default Component;
