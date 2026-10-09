import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxl40ybqg.css';
import '../../css/s/sbasrbbib.css';
import '../../css/z/z92lvuenp.css';
import '../../css/q/qgobz-bwl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wxl40ybqg"/><path class="sbasrbbib"/><path class="z92lvuenp"/><path class="qgobz-bwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pylon-48"} {...others} />);
}

export default Component;
