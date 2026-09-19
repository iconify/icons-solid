import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrrsmlbdl.css';
import '../../css/o/ow0kcdcgg.css';
import '../../css/p/p_c34mhur.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hrrsmlbdl"/><path class="ow0kcdcgg"/><path class="p_c34mhur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:time-plot"} {...others} />);
}

export default Component;
