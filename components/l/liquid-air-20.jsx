import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt2mfkbnd.css';
import '../../css/d/d_ox8aczn.css';
import '../../css/k/k7qteslrh.css';
import '../../css/r/r3am92kyi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kt2mfkbnd"/><path class="d_ox8aczn"/><path class="k7qteslrh"/><path class="r3am92kyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:liquid-air-20"} {...others} />);
}

export default Component;
