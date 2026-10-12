import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/y/ykstnuplu.css';
import '../../css/z/z7vmyx0jp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="ykstnuplu"/><path class="z7vmyx0jp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-circle-right-20"} {...others} />);
}

export default Component;
