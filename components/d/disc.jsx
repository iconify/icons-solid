import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lghyv1bbe.css';
import '../../css/a/ao7oa23vf.css';
import '../../css/s/srlliip3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lghyv1bbe"/><path class="ao7oa23vf"/><path clip-rule="evenodd" class="srlliip3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:disc"} {...others} />);
}

export default Component;
