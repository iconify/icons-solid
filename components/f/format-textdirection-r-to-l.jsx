import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay4kt0lor.css';

const viewBox = {"width":344,"height":432};
const content = `<path class="ay4kt0lor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:format-textdirection-r-to-l"} {...others} />);
}

export default Component;
