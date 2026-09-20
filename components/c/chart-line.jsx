import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecsrbub4u.css';
import '../../css/j/j5k2n0bto.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ecsrbub4u"/><path class="j5k2n0bto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:chart-line"} {...others} />);
}

export default Component;
