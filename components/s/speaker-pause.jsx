import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkkd93b4n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dkkd93b4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:speaker-pause"} {...others} />);
}

export default Component;
