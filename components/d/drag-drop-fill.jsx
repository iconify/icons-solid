import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia27gz4hm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ia27gz4hm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:drag-drop-fill"} {...others} />);
}

export default Component;
