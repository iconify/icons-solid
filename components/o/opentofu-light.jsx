import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa2prg0rq.css';
import '../../css/q/qpyqn2b5e.css';
import '../../css/r/r5esj3sez.css';
import '../../css/i/iq6pp1bcj.css';
import '../../css/x/xiwaejb0i.css';
import '../../css/b/b3-h7zkiq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="pa2prg0rq"><path class="qpyqn2b5e"/><path class="r5esj3sez"/><path class="iq6pp1bcj"/><path class="xiwaejb0i"/><path class="b3-h7zkiq cls-4"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:opentofu-light"} {...others} />);
}

export default Component;
