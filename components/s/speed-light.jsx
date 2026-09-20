import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/e/ex0g_cb-o.css';
import '../../css/b/bcqf_8b-o.css';
import '../../css/s/scozvdbkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="ex0g_cb-o"/><path class="bcqf_8b-o"/><path class="scozvdbkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:speed-light"} {...others} />);
}

export default Component;
