import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a5jpz2bqs.css';
import '../../css/h/h4-tcib6f.css';
import '../../css/h/hnvtc2_fp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="a5jpz2bqs"/><path class="h4-tcib6f"/><path class="hnvtc2_fp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-copy-outline"} {...others} />);
}

export default Component;
