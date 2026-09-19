import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q73ykcblb.css';
import '../../css/q/qgekv_ybn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q73ykcblb"/><path class="qgekv_ybn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:virtual-machine"} {...others} />);
}

export default Component;
