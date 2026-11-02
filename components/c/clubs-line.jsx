import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cc1x0_-rt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cc1x0_-rt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:clubs-line"} {...others} />);
}

export default Component;
