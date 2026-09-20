import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmsivqbdn.css';
import '../../css/b/bp_r-ss8m.css';
import '../../css/j/jb6w9qawu.css';
import '../../css/a/a--0kkbee.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pmsivqbdn"/><path class="bp_r-ss8m"/><circle class="jb6w9qawu"/><path class="a--0kkbee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:jeans"} {...others} />);
}

export default Component;
