import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jre_dac-l.css';
import '../../css/z/z__q3xrym.css';
import '../../css/w/w59mli1dv.css';
import '../../css/s/s6hxn7bnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jre_dac-l"/><path class="z__q3xrym"/><path class="w59mli1dv"/><path class="s6hxn7bnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:car-front"} {...others} />);
}

export default Component;
