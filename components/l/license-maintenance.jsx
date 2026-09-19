import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aq9mtny3q.css';
import '../../css/d/dt0zo1djr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aq9mtny3q"/><path class="dt0zo1djr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:license-maintenance"} {...others} />);
}

export default Component;
