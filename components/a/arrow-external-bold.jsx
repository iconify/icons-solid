import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kbjmhzb7d.css';
import '../../css/s/st6sipqdt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="kbjmhzb7d"/><path class="st6sipqdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-external-bold"} {...others} />);
}

export default Component;
