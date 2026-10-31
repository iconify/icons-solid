import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m1xw3cctw.css';
import '../../css/u/uml5kp9ow.css';
import '../../css/k/kpgvotblb.css';
import '../../css/v/v6yzk-b5c.css';
import '../../css/v/v3bzhxbbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="m1xw3cctw"/><path class="uml5kp9ow wm-shine"/><path class="kpgvotblb wm-k"/><path class="v6yzk-b5c wm-a"/><path class="v3bzhxbbh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:toolbox"} {...others} />);
}

export default Component;
