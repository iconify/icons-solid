import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_yv-xuoa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j_yv-xuoa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:music-note"} {...others} />);
}

export default Component;
