import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ei6pz5b9k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ei6pz5b9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:devicesplug"} {...others} />);
}

export default Component;
