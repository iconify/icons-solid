import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zon-x9yje.css';
import '../../css/s/si-z7fbuk.css';
import '../../css/t/tbee2l8-g.css';
import '../../css/v/v4-vqmvnf.css';
import '../../css/s/s1vtn9bnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="zon-x9yje"/><path class="si-z7fbuk wm-shine"/><path class="tbee2l8-g wm-k"/><path class="v4-vqmvnf wm-a"/><path class="s1vtn9bnk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:timer"} {...others} />);
}

export default Component;
