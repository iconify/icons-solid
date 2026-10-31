import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/z88556bhf.css';
import '../../css/b/bnajbbb_m.css';
import '../../css/f/f14ml_yrs.css';
import '../../css/y/y875pzbpu.css';
import '../../css/g/g0n3qz6cg.css';
import '../../css/v/vjr8b9jwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="z88556bhf"/><path class="bnajbbb_m wm-shine"/><path class="f14ml_yrs wm-k"/><path class="wm-a y875pzbpu"/><path class="g0n3qz6cg wm-s"/><path class="vjr8b9jwh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:witch-hat"} {...others} />);
}

export default Component;
