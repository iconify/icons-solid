import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q00u4lbrm.css';
import '../../css/q/q3ouhtb3r.css';
import '../../css/f/fv17wn2rj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q00u4lbrm"/><circle class="q3ouhtb3r"/><path class="fv17wn2rj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:baseball-outline"} {...others} />);
}

export default Component;
