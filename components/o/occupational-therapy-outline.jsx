import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aa3b9ub_r.css';
import '../../css/r/rofgv92rt.css';
import '../../css/r/rr7_81b-a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="aa3b9ub_r"/><path clip-rule="evenodd" class="rofgv92rt"/><path clip-rule="evenodd" class="rr7_81b-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:occupational-therapy-outline"} {...others} />);
}

export default Component;
