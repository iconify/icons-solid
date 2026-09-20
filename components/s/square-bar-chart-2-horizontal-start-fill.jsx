import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzvv3hf9a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mzvv3hf9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-bar-chart-2-horizontal-start-fill"} {...others} />);
}

export default Component;
