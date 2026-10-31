import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fidm6mb6k.css';
import '../../css/r/r09yspbff.css';
import '../../css/r/riug23bdl.css';
import '../../css/c/clmwlkwir.css';
import '../../css/r/rmhzwacqp.css';
import '../../css/f/fhoyrqbeq.css';
import '../../css/r/r9vlxshak.css';
import '../../css/w/wk7mneajp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="fidm6mb6k"/><path class="r09yspbff"/><path class="riug23bdl wm-shine"/><path class="clmwlkwir wm-k"/><path class="rmhzwacqp wm-a"/><path class="fhoyrqbeq"/><path class="r9vlxshak"/><path class="wk7mneajp wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:folder-open"} {...others} />);
}

export default Component;
