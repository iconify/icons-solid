import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hnbhbrjgz.css';
import '../../css/s/sh6_yxm3e.css';
import '../../css/c/cu6ft-b7q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="hnbhbrjgz"/><path class="sh6_yxm3e"/><path class="cu6ft-b7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:eye-1-duo"} {...others} />);
}

export default Component;
