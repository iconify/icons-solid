import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/w9rkhebuc.css';
import '../../css/m/mg70k78il.css';
import '../../css/l/lhyb3bbbn.css';
import '../../css/x/x2f5ebbeb.css';
import '../../css/p/pfiv80a5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="w9rkhebuc"/><path class="mg70k78il wm-shine"/><path class="lhyb3bbbn wm-k"/><path class="wm-a x2f5ebbeb"/><path class="pfiv80a5u wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:grape"} {...others} />);
}

export default Component;
