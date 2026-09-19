import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vsubc8bso.css';
import '../../css/r/rmib92a5m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vsubc8bso"/><path class="rmib92a5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:alarm-add"} {...others} />);
}

export default Component;
