import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/h/hma-isu1d.css';
import '../../css/d/dnokfxkrz.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="nv9qcacyl"><path class="hma-isu1d"/><path class="dnokfxkrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ua-4x3"} {...others} />);
}

export default Component;
