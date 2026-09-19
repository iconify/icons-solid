import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3eo2xxnl.css';

const viewBox = {"width":1664,"height":1664};
const content = `<path class="m3eo2xxnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:clock"} {...others} />);
}

export default Component;
