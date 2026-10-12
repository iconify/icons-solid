import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygkahxbsa.css';
import '../../css/e/e_i9g7bpu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ygkahxbsa"/><path class="e_i9g7bpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:clock-cycle-stroke-20"} {...others} />);
}

export default Component;
