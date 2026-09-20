import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bgwhr77nl.css';
import '../../css/i/i4tv5pt4m.css';
import '../../css/y/y8jfy_b8a.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="bgwhr77nl"/><rect transform="rotate(90 7 3.54)" class="i4tv5pt4m"/><path class="y8jfy_b8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-content-archive-box-content-banker-archive-file"} {...others} />);
}

export default Component;
