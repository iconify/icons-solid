import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l40jc9brz.css';
import '../../css/k/knv_kx8ky.css';
import '../../css/b/bek5jfb-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l40jc9brz"/><path class="knv_kx8ky"/><path class="bek5jfb-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:golang"} {...others} />);
}

export default Component;
