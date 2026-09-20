import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw6hy-k3l.css';
import '../../css/q/q7cxp6bkk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pw6hy-k3l"/><path clip-rule="evenodd" class="q7cxp6bkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:safari-solid"} {...others} />);
}

export default Component;
