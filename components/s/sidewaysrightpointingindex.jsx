import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl161n-1i.css';
import '../../css/f/fgm3acnse.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cl161n-1i"/><path class="fgm3acnse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sidewaysrightpointingindex"} {...others} />);
}

export default Component;
