import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjhk_eb_p.css';
import '../../css/k/k5xt08bar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cjhk_eb_p"/><path class="k5xt08bar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:mastercard-line"} {...others} />);
}

export default Component;
