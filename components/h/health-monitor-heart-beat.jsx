import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhi--6bpa.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yhi--6bpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-monitor-heart-beat"} {...others} />);
}

export default Component;
