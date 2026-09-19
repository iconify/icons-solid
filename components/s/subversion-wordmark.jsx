import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mc0ucyjua.css';
import '../../css/c/c-ehkdbnh.css';
import '../../css/l/llb7ncbpf.css';
import '../../css/q/q0xn5iwfb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="mc0ucyjua"/><path class="c-ehkdbnh"/><path class="llb7ncbpf"/><path class="q0xn5iwfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:subversion-wordmark"} {...others} />);
}

export default Component;
