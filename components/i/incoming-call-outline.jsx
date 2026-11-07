import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2_o7ybby.css';
import '../../css/k/k2mmmf-wt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l2_o7ybby"/><path class="k2mmmf-wt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:incoming-call-outline"} {...others} />);
}

export default Component;
