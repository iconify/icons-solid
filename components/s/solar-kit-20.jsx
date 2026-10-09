import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqlaqcc4h.css';
import '../../css/p/pb5d0bbik.css';
import '../../css/z/zq7fmrmeu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vqlaqcc4h"/><path class="pb5d0bbik"/><path class="zq7fmrmeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-kit-20"} {...others} />);
}

export default Component;
