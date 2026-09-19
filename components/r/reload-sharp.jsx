import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-22auf4m.css';
import '../../css/h/h2afzob3l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l-22auf4m"/><path class="h2afzob3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:reload-sharp"} {...others} />);
}

export default Component;
