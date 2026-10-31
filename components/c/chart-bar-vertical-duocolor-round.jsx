import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqrqvz3rm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mqrqvz3rm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-bar-vertical-duocolor-round"} {...others} />);
}

export default Component;
