import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yc17hactt.css';
import '../../css/b/bo_dldbxa.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yc17hactt"/><path class="bo_dldbxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:weather-umbrella-snowing"} {...others} />);
}

export default Component;
