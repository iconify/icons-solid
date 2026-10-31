import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nalx68bfg.css';
import '../../css/y/yken_7-4y.css';
import '../../css/d/dxfyzgbvq.css';
import '../../css/v/vuvr24b3y.css';
import '../../css/e/eyr57ibcj.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="nalx68bfg"/><path class="wm-shine yken_7-4y"/><path class="dxfyzgbvq wm-k"/><path class="vuvr24b3y wm-a"/><path class="eyr57ibcj wm-s"/><path class="i49wp7b0m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:stamp"} {...others} />);
}

export default Component;
