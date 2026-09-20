import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pc3kirm1i.css';
import '../../css/n/n5821were.css';
import '../../css/z/zwvmvgb6p.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="pc3kirm1i"/><path class="n5821were"/><path class="zwvmvgb6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:scroll-down"} {...others} />);
}

export default Component;
