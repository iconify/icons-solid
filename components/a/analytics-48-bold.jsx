import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz0-7c0kb.css';
import '../../css/f/fpw9y5b6x.css';
import '../../css/h/hjih05f-k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oz0-7c0kb"/><path class="fpw9y5b6x"/><path class="hjih05f-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:analytics-48-bold"} {...others} />);
}

export default Component;
