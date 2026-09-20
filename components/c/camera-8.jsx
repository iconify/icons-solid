import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/w/wf1_a3_wl.css';
import '../../css/p/prp29o_1b.css';
import '../../css/x/xq_kjdbuu.css';
import '../../css/e/e17umlb7o.css';
import '../../css/v/v6kv9rbyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="wf1_a3_wl"/><path class="prp29o_1b"/><path class="xq_kjdbuu"/><path class="e17umlb7o"/><path class="v6kv9rbyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:camera-8"} {...others} />);
}

export default Component;
