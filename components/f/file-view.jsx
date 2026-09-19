import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/h/h7q8geb_w.css';
import '../../css/z/zhpszsu4q.css';
import '../../css/x/xpygl7bep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="h7q8geb_w"/><path class="zhpszsu4q"/><path class="xpygl7bep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-view"} {...others} />);
}

export default Component;
