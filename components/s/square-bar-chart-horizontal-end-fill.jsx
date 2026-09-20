import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iy7uj0bjn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iy7uj0bjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-bar-chart-horizontal-end-fill"} {...others} />);
}

export default Component;
