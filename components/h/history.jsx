import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/m4zh-02ad.css';
import '../../css/u/u3-ls_bgk.css';
import '../../css/s/sri4hhb8e.css';
import '../../css/a/adoqhr8vy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="m4zh-02ad"/><path class="u3-ls_bgk"/><path class="sri4hhb8e"/><path class="adoqhr8vy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:history"} {...others} />);
}

export default Component;
