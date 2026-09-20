import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf6g9sb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kf6g9sb2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:card-bulleted-settings-outline"} {...others} />);
}

export default Component;
