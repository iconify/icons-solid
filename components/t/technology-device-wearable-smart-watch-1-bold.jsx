import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1x4_db-s.css';
import '../../css/z/z759kx8fb.css';
import '../../css/j/jtybs9b8s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q1x4_db-s"/><path class="z759kx8fb"/><path class="jtybs9b8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:technology-device-wearable-smart-watch-1-bold"} {...others} />);
}

export default Component;
