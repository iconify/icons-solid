import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct46urb9k.css';
import '../../css/q/qcnneg_kt.css';
import '../../css/g/gg2ebobjz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ct46urb9k"/><path class="qcnneg_kt"/><path class="gg2ebobjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wood-stove-48-bold"} {...others} />);
}

export default Component;
