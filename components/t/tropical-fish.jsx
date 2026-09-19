import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zzocgzcfa.css';
import '../../css/m/mj8xpilhi.css';
import '../../css/t/tl7l6fl8j.css';
import '../../css/s/sa0loqtnp.css';
import '../../css/d/d020ekb5a.css';
import '../../css/m/m8dg2lbzc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="zzocgzcfa"/><path class="mj8xpilhi"/><path class="tl7l6fl8j"/><path class="sa0loqtnp"/><path class="d020ekb5a"/><path class="m8dg2lbzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:tropical-fish"} {...others} />);
}

export default Component;
