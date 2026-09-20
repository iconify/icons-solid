import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzn8h_vqn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rzn8h_vqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:tower-communication"} {...others} />);
}

export default Component;
