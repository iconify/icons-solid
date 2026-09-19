import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/z2z-7--xo.css';
import '../../css/t/tka0kcvop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="z2z-7--xo"/><path class="tka0kcvop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:skool"} {...others} />);
}

export default Component;
