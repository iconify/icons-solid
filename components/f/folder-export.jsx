import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/ccc_epgpq.css';
import '../../css/x/xt5dz1bkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ccc_epgpq"/><path class="xt5dz1bkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-export"} {...others} />);
}

export default Component;
