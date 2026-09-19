import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/at38f-blc.css';
import '../../css/s/s5220ct4r.css';
import '../../css/b/bukkqxu-l.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="at38f-blc"/><path class="s5220ct4r"/><path class="bukkqxu-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sl-4x3"} {...others} />);
}

export default Component;
