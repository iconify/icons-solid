import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx-eez2fk.css';
import '../../css/q/qhl_bsc2l.css';
import '../../css/j/j4fy5j07e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zx-eez2fk"/><path class="qhl_bsc2l"/><path class="j4fy5j07e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:compreface"} {...others} />);
}

export default Component;
