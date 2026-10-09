import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-9xc2bcj.css';
import '../../css/m/mxnl1347f.css';
import '../../css/g/g9pwdi6pr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s-9xc2bcj"/><path class="mxnl1347f"/><path class="g9pwdi6pr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:transformer-pole-20"} {...others} />);
}

export default Component;
