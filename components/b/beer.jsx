import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sm8yhmbew.css';
import '../../css/m/mem74i13c.css';
import '../../css/q/qwrl1299h.css';
import '../../css/h/hapjozblf.css';
import '../../css/u/ugzrm7bka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="sm8yhmbew"/><path class="mem74i13c wm-shine"/><path class="qwrl1299h wm-k"/><path class="hapjozblf wm-a"/><path class="ugzrm7bka wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:beer"} {...others} />);
}

export default Component;
