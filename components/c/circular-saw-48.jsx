import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9pto6bfk.css';
import '../../css/h/hb4ovmb-c.css';
import '../../css/b/betbcgbxb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n9pto6bfk"/><path class="hb4ovmb-c"/><path class="betbcgbxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:circular-saw-48"} {...others} />);
}

export default Component;
