import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf38nmbzc.css';
import '../../css/j/j_fgb0h4o.css';
import '../../css/e/e-_ammf2d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tf38nmbzc"/><path class="j_fgb0h4o"/><path class="e-_ammf2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:weather-station"} {...others} />);
}

export default Component;
