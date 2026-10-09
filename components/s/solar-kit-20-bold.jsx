import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw0k10tqf.css';
import '../../css/r/rnj4lldhb.css';
import '../../css/w/w1yt_6bzo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aw0k10tqf"/><path class="rnj4lldhb"/><path class="w1yt_6bzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-kit-20-bold"} {...others} />);
}

export default Component;
