import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/benkryb_q.css';

const viewBox = {"width":455,"height":735};
const content = `<path class="benkryb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:e-upper-case"} {...others} />);
}

export default Component;
