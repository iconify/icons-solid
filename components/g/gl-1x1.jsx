import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erzf03bmv.css';
import '../../css/k/kd8y0_bxz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="erzf03bmv"/><path class="kd8y0_bxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:gl-1x1"} {...others} />);
}

export default Component;
