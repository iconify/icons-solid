import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ru8qcobdb.css';
import '../../css/i/igrd9_y7n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ru8qcobdb"/><path clip-rule="evenodd" class="igrd9_y7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pills-outline"} {...others} />);
}

export default Component;
