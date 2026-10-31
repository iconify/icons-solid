import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yw66-e3oc.css';
import '../../css/p/p1htjs99m.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/e/epabx8bdv.css';
import '../../css/e/e4ehvrk0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="yw66-e3oc"/><path class="p1htjs99m wm-shine"/><path class="l9lv5_bcf wm-k"/><path class="epabx8bdv wm-a"/><path class="e4ehvrk0f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:scan-search"} {...others} />);
}

export default Component;
