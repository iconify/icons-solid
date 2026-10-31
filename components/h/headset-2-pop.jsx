import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j58fo5boa.css';
import '../../css/c/cv4dhqizq.css';
import '../../css/a/ac3zh4bfh.css';
import '../../css/u/uielh4ntr.css';
import '../../css/t/tksfsfojs.css';
import '../../css/a/ali4bpbad.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="j58fo5boa"/><path class="cv4dhqizq"/><path class="ac3zh4bfh"/><path class="uielh4ntr"/><path class="tksfsfojs"/><path class="ali4bpbad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:headset-2-pop"} {...others} />);
}

export default Component;
