import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/ruftucbpg.css';
import '../../css/e/eyo0oqbuw.css';
import '../../css/y/yxa4pbbgv.css';
import '../../css/y/ynqmjxh6x.css';
import '../../css/o/o3qx-w_0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ruftucbpg wm-k"/><path class="eyo0oqbuw wm-shadow"/><path class="wm-k yxa4pbbgv"/><path class="wm-a ynqmjxh6x"/><path class="o3qx-w_0y wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paisley-engrave"} {...others} />);
}

export default Component;
