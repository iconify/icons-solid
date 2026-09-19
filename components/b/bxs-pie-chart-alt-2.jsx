import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc_sw6bwg.css';
import '../../css/r/ro-axhb9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jc_sw6bwg"/><path class="ro-axhb9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-pie-chart-alt-2"} {...others} />);
}

export default Component;
