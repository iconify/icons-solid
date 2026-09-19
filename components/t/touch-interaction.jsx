import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kql266bwv.css';
import '../../css/y/yceptjbfi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kql266bwv"/><path class="yceptjbfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:touch-interaction"} {...others} />);
}

export default Component;
