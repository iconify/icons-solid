import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/ctfm4yb2w.css';
import '../../css/f/f8km_iiat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ctfm4yb2w"/><path class="f8km_iiat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:header"} {...others} />);
}

export default Component;
