import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y3up31bld.css';
import '../../css/p/pa21yybyx.css';
import '../../css/n/nfedgpbaf.css';
import '../../css/g/g9usxcbsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y3up31bld"/><path class="pa21yybyx"/><path class="nfedgpbaf"/><path class="g9usxcbsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:office-file-text"} {...others} />);
}

export default Component;
