import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owokicyeq.css';
import '../../css/b/bkc1rfxdc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="owokicyeq wm-k"/><path class="bkc1rfxdc wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:code"} {...others} />);
}

export default Component;
