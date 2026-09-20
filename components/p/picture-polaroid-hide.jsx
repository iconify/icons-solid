import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sqp0-ybsk.css';
import '../../css/h/hbdxwwb9u.css';
import '../../css/n/nrthqg0ra.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sqp0-ybsk"/><path class="hbdxwwb9u"/><path class="nrthqg0ra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:picture-polaroid-hide"} {...others} />);
}

export default Component;
