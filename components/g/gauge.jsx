import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/s813oxban.css';
import '../../css/t/tn4ebbbuy.css';
import '../../css/f/fq34ly3dk.css';
import '../../css/f/f4wn345na.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="s813oxban"/><path class="tn4ebbbuy wm-shine"/><path class="fq34ly3dk wm-k"/><path class="f4wn345na wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:gauge"} {...others} />);
}

export default Component;
