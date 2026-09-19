import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xt0fr7bdi.css';
import '../../css/c/cpol0tbdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xt0fr7bdi"/><path class="cpol0tbdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:tv-fix"} {...others} />);
}

export default Component;
