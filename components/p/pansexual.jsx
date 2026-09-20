import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vymljlban.css';
import '../../css/s/s4a6lubqy.css';
import '../../css/u/uzzzkhbaf.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vymljlban"/><path class="s4a6lubqy"/><path class="uzzzkhbaf"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pansexual"} {...others} />);
}

export default Component;
