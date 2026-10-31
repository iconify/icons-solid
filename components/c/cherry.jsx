import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yzgjpubpd.css';
import '../../css/w/wysaapbjo.css';
import '../../css/v/vrm34f8gd.css';
import '../../css/o/ows2wwb4n.css';
import '../../css/q/qsxczfb-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="yzgjpubpd"/><path class="wm-shine wysaapbjo"/><path class="vrm34f8gd wm-k"/><path class="ows2wwb4n wm-a"/><path class="qsxczfb-k wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cherry"} {...others} />);
}

export default Component;
