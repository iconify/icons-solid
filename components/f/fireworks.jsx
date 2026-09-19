import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnfju421g.css';
import '../../css/u/uuc96wb-t.css';
import '../../css/x/xsa_9xo4e.css';
import '../../css/r/rjj0-6jyn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="bnfju421g"/><path class="uuc96wb-t"/><path class="xsa_9xo4e"/><path class="rjj0-6jyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:fireworks"} {...others} />);
}

export default Component;
