import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcg3ghv9p.css';
import '../../css/j/j85tku0cp.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="mcg3ghv9p"/><path class="j85tku0cp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:code-alt"} {...others} />);
}

export default Component;
