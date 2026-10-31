import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lkf20xfex.css';
import '../../css/n/ntktkh31h.css';
import '../../css/q/qri0hac_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="lkf20xfex"/><path class="ntktkh31h wm-k"/><path class="qri0hac_m wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:toran"} {...others} />);
}

export default Component;
