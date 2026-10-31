import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/ysxssqbhh.css';
import '../../css/u/uwc1d5b3u.css';
import '../../css/g/go61xdb2e.css';
import '../../css/g/g94v_nk3n.css';
import '../../css/w/ws8yljbwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow ysxssqbhh"/><path class="uwc1d5b3u wm-shadow"/><path class="go61xdb2e"/><path class="g94v_nk3n"/><path class="ws8yljbwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:archive-restore"} {...others} />);
}

export default Component;
