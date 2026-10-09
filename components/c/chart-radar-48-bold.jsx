import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnz38bbup.css';
import '../../css/x/x-e0pwbux.css';
import '../../css/m/msg7k8bbh.css';
import '../../css/w/wyuzfgbum.css';
import '../../css/o/oemkp8bpy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mnz38bbup"/><path class="x-e0pwbux"/><path class="msg7k8bbh"/><path class="wyuzfgbum"/><path class="oemkp8bpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-radar-48-bold"} {...others} />);
}

export default Component;
