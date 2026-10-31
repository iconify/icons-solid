import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mr_zc47bq.css';
import '../../css/x/xmj0fvb0f.css';
import '../../css/o/og5669pjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="mr_zc47bq wm-k"/><path class="wm-a xmj0fvb0f"/><path class="og5669pjp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:reply"} {...others} />);
}

export default Component;
