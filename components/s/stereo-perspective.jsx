import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuzjs9mod.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cuzjs9mod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:stereo-perspective"} {...others} />);
}

export default Component;
