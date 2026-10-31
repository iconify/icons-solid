import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wtloudwuf.css';
import '../../css/g/g6e2c4d2h.css';
import '../../css/l/lo-bdo53p.css';
import '../../css/t/tcjvbpb5r.css';
import '../../css/b/b572__8fz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wtloudwuf"/><path class="g6e2c4d2h wm-shine"/><path class="lo-bdo53p wm-k"/><path class="tcjvbpb5r wm-a"/><path class="b572__8fz wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:gamepad"} {...others} />);
}

export default Component;
