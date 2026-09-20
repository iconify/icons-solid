import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzephrjzr.css';
import '../../css/q/qpinueb1v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pzephrjzr"/><path class="qpinueb1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:photography-picture-polaroid"} {...others} />);
}

export default Component;
