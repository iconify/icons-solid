import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odelaxbie.css';
import '../../css/w/wuhamvb4f.css';

const viewBox = {"width":400,"height":400};
const content = `<path class="odelaxbie"/><path class="wuhamvb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:backloggd"} {...others} />);
}

export default Component;
