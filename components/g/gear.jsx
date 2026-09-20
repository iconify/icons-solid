import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbshjibkz.css';
import '../../css/g/gnx__cb0f.css';
import '../../css/i/i6lxnjb1e.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/w/whe3sybgf.css';
import '../../css/y/yahz0ib6i.css';
import '../../css/v/vpiz7xr6v.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="hbshjibkz"/><path class="gnx__cb0f"/><path class="i6lxnjb1e"/><g class="jn8qy4bru"><circle class="whe3sybgf"/><circle class="yahz0ib6i"/><path class="vpiz7xr6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:gear"} {...others} />);
}

export default Component;
