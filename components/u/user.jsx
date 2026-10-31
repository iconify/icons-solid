import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/rky9ux38x.css';
import '../../css/p/p04mk7bzj.css';
import '../../css/x/xvkzbpb0a.css';
import '../../css/r/ru3z26bcs.css';
import '../../css/v/v_1mpd-hl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="rky9ux38x"/><path class="p04mk7bzj wm-shine"/><path class="xvkzbpb0a"/><path class="ru3z26bcs"/><path class="v_1mpd-hl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:user"} {...others} />);
}

export default Component;
