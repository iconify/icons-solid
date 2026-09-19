import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tygmpgx5r.css';
import '../../css/p/pin_d6b9x.css';
import '../../css/a/a5yv6_bwy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tygmpgx5r"/><path class="pin_d6b9x"/><path class="a5yv6_bwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:stacked-scrolling-1"} {...others} />);
}

export default Component;
