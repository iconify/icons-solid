import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qbpz77bub.css';
import '../../css/u/u7ky2y4af.css';
import '../../css/u/u4bse819v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qbpz77bub"/><path class="u7ky2y4af wm-k"/><path class="u4bse819v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:puja-thali"} {...others} />);
}

export default Component;
