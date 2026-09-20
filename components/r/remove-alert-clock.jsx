import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q44um0dfy.css';
import '../../css/h/h4cu_3_0z.css';
import '../../css/q/qq9g0dbkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q44um0dfy"/><path class="h4cu_3_0z"/><path class="qq9g0dbkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:remove-alert-clock"} {...others} />);
}

export default Component;
