import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxe0xlbcn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mxe0xlbcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:solar-panel"} {...others} />);
}

export default Component;
