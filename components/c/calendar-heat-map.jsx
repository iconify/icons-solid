import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpyx0diih.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cpyx0diih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:calendar-heat-map"} {...others} />);
}

export default Component;
