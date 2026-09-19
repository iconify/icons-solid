import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/e6jcrmbkj.css';
import '../../css/p/pzvl44b2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="e6jcrmbkj"/><path class="pzvl44b2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:eye"} {...others} />);
}

export default Component;
