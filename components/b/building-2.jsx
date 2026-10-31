import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/ea0lwhj5k.css';
import '../../css/o/on0ts-5zi.css';
import '../../css/b/bt4eanb_m.css';
import '../../css/e/ee72xe_hx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ea0lwhj5k"/><path class="on0ts-5zi wm-shine"/><path class="bt4eanb_m wm-k"/><path class="ee72xe_hx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:building-2"} {...others} />);
}

export default Component;
