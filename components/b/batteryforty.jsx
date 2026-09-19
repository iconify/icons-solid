import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqlh6hb3q.css';

const viewBox = {"width":1024,"height":768};
const content = `<path class="zqlh6hb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:batteryforty"} {...others} />);
}

export default Component;
