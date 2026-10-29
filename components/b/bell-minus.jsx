import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e4x4atbvu.css';
import '../../css/s/srwwv-s6o.css';
import '../../css/g/grszprbdj.css';
import '../../css/p/pqaf0xbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="e4x4atbvu wm-k"/><path class="srwwv-s6o"/><path class="grszprbdj"/><path class="pqaf0xbvj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bell-minus"} {...others} />);
}

export default Component;
