import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j245oinhx.css';
import '../../css/k/ko2oy2wgp.css';
import '../../css/s/so7n-kbcv.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 j245oinhx"/><path class="clr-i-outline clr-i-outline-path-2 ko2oy2wgp"/><path class="clr-i-outline clr-i-outline-path-3 so7n-kbcv"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:shuffle-line"} {...others} />);
}

export default Component;
