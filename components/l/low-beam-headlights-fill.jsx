import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd0-3ctca.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nd0-3ctca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:low-beam-headlights-fill"} {...others} />);
}

export default Component;
