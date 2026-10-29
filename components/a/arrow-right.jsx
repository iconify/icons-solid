import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i52o7bbpp.css';
import '../../css/t/tpmoddcaw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i52o7bbpp wm-k"/><path class="tpmoddcaw wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:arrow-right"} {...others} />);
}

export default Component;
