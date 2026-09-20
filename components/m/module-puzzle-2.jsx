import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwiaqi-vx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bwiaqi-vx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:module-puzzle-2"} {...others} />);
}

export default Component;
