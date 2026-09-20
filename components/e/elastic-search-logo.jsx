import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/ztedu_cxc.css';
import '../../css/p/p1pg8cmjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="ztedu_cxc"/><path class="p1pg8cmjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:elastic-search-logo"} {...others} />);
}

export default Component;
