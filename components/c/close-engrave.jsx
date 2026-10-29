import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e2hwfubct.css';
import '../../css/l/l-cphhs4g.css';
import '../../css/z/zl-i7yb9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="e2hwfubct"/><path class="l-cphhs4g wm-shadow"/><path class="zl-i7yb9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:close-engrave"} {...others} />);
}

export default Component;
