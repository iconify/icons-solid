import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/ddyhzzb2r.css';
import '../../css/n/nxyvj7hbk.css';
import '../../css/t/toe-c6b0o.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="ddyhzzb2r"/><path class="nxyvj7hbk"/><path class="toe-c6b0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:sea"} {...others} />);
}

export default Component;
