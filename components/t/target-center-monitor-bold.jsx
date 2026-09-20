import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oytsm6b5s.css';
import '../../css/d/dxu2gubtq.css';
import '../../css/j/j9hxiotjy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oytsm6b5s"/><path class="dxu2gubtq"/><path class="j9hxiotjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:target-center-monitor-bold"} {...others} />);
}

export default Component;
