import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uz11l89yb.css';
import '../../css/o/oimt4ji_g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uz11l89yb"/><path class="oimt4ji_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:phone-arrow-right-stroke-20"} {...others} />);
}

export default Component;
