import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdv_6bbog.css';
import '../../css/i/iz2obhzwv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mdv_6bbog"/><path class="iz2obhzwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:calendar-add"} {...others} />);
}

export default Component;
