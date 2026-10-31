import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/ruiz-dbqz.css';
import '../../css/k/kl_mwkbhb.css';
import '../../css/b/b2qohnadj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ruiz-dbqz wm-k"/><path class="kl_mwkbhb wm-a"/><path class="b2qohnadj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:move"} {...others} />);
}

export default Component;
