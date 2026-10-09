import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hda81ubct.css';
import '../../css/o/ot3162boi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hda81ubct"/><path class="ot3162boi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paw-48-bold"} {...others} />);
}

export default Component;
