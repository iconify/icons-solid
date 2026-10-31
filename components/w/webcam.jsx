import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/x3ej9i-oq.css';
import '../../css/m/mj61g7jii.css';
import '../../css/o/ozjkdu0on.css';
import '../../css/g/gd0naobgk.css';
import '../../css/u/u6yfpbb3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="x3ej9i-oq"/><path class="mj61g7jii wm-shine"/><path class="ozjkdu0on wm-k"/><path class="gd0naobgk wm-a"/><path class="u6yfpbb3m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:webcam"} {...others} />);
}

export default Component;
