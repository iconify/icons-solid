import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/reiuk6b0f.css';
import '../../css/f/fxi00ibkw.css';
import '../../css/z/z-a4k4b8u.css';
import '../../css/w/wneoubc6n.css';
import '../../css/a/a5n0jybeg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="reiuk6b0f"/><path class="fxi00ibkw wm-shine"/><path class="wm-k z-a4k4b8u"/><path class="wm-a wneoubc6n"/><path class="a5n0jybeg wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:sprout"} {...others} />);
}

export default Component;
