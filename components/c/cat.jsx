import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/odjft_4qg.css';
import '../../css/l/lygac8m7g.css';
import '../../css/q/qv5edzb7c.css';
import '../../css/z/zz9euurfb.css';
import '../../css/h/hrkch_-vl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="odjft_4qg"/><path class="lygac8m7g"/><path class="qv5edzb7c wm-shine"/><path class="wm-k zz9euurfb"/><path class="hrkch_-vl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cat"} {...others} />);
}

export default Component;
