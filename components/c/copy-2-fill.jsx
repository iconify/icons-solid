import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkkp_d1vr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kkkp_d1vr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:copy-2-fill"} {...others} />);
}

export default Component;
