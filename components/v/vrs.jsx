import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7wkc6bmm.css';
import '../../css/u/u0c79lbga.css';
import '../../css/j/jvytkl3_h.css';

const viewBox = {"width":121,"height":121};
const content = `<circle class="w7wkc6bmm"/><path class="u0c79lbga"/><path class="jvytkl3_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:vrs"} {...others} />);
}

export default Component;
