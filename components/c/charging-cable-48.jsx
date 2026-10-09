import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r72vqtbkc.css';
import '../../css/s/sy67f09qo.css';
import '../../css/x/xyec1nbxw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r72vqtbkc"/><path class="sy67f09qo"/><path class="xyec1nbxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charging-cable-48"} {...others} />);
}

export default Component;
