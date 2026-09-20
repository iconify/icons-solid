import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k53f7pjls.css';
import '../../css/l/l614akbje.css';
import '../../css/v/vkj_ftrwz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k53f7pjls"/><path class="l614akbje"/><path class="vkj_ftrwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:phone-off-1"} {...others} />);
}

export default Component;
