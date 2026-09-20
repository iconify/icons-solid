import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7jn51b8w.css';
import '../../css/v/vrnfpbw3e.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="r7jn51b8w"/><path class="vrnfpbw3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:certimate"} {...others} />);
}

export default Component;
