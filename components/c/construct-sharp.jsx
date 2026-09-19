import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ouaf7fzvu.css';
import '../../css/v/vvr-kwzju.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ouaf7fzvu"/><path class="vvr-kwzju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:construct-sharp"} {...others} />);
}

export default Component;
