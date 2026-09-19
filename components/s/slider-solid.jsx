import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fykosbbrv.css';
import '../../css/s/svhq3i9zq.css';
import '../../css/g/gezk6lbtr.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid clr-i-solid-path-1 fykosbbrv"/><path class="clr-i-solid clr-i-solid-path-2 svhq3i9zq"/><path class="clr-i-solid clr-i-solid-path-3 gezk6lbtr"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:slider-solid"} {...others} />);
}

export default Component;
