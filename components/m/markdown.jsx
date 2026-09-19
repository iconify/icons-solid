import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3al6s0ue.css';
import '../../css/d/dys46yl0s.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="c3al6s0ue"/><path class="dys46yl0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:markdown"} {...others} />);
}

export default Component;
