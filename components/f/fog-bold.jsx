import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je8y-zlbu.css';
import '../../css/p/p2qbusfri.css';
import '../../css/f/fcdqs1q8n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="je8y-zlbu"/><path class="p2qbusfri"/><path class="fcdqs1q8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fog-bold"} {...others} />);
}

export default Component;
