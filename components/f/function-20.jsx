import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pghs5ubcb.css';
import '../../css/k/kuvw34acp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pghs5ubcb"/><path class="kuvw34acp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:function-20"} {...others} />);
}

export default Component;
