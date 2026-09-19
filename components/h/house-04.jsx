import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cc-uymnfm.css';
import '../../css/d/djg_lkhxc.css';
import '../../css/c/cvrj5xban.css';
import '../../css/w/wswjvjhxc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cc-uymnfm"/><ellipse class="djg_lkhxc"/><path class="cvrj5xban"/><path class="wswjvjhxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:house-04"} {...others} />);
}

export default Component;
