import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9zm6abth.css';
import '../../css/h/ha140i38m.css';
import '../../css/c/cij3cro7f.css';
import '../../css/m/mthnz6bim.css';
import '../../css/i/izjyrbg3z.css';

const viewBox = {"width":4.233,"height":4.233};
const content = `<g class="e9zm6abth"><path class="ha140i38m"/><path class="cij3cro7f"/><path class="mthnz6bim"/><path class="izjyrbg3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:flutter"} {...others} />);
}

export default Component;
