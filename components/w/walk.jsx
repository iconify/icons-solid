import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmtbg17_s.css';
import '../../css/v/vcrk3tb3p.css';
import '../../css/k/k7unic_8x.css';
import '../../css/b/b_4g56b9z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cmtbg17_s"/><path class="vcrk3tb3p"/><path class="k7unic_8x"/><circle class="b_4g56b9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:walk"} {...others} />);
}

export default Component;
