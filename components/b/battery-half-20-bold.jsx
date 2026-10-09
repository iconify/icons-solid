import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrrfucygy.css';
import '../../css/k/k_lu-3vpq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wrrfucygy"/><path class="k_lu-3vpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-half-20-bold"} {...others} />);
}

export default Component;
