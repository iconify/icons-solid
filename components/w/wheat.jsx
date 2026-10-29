import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g_mfudb8u.css';
import '../../css/a/av7g1gbmu.css';
import '../../css/n/n8137bc8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="g_mfudb8u"/><path class="av7g1gbmu"/><path class="n8137bc8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:wheat"} {...others} />);
}

export default Component;
