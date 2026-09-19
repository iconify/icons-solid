import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6sho1bhy.css';
import '../../css/l/lhu4h4qes.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q6sho1bhy"/><path class="lhu4h4qes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:purchase"} {...others} />);
}

export default Component;
