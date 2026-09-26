import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kw-auxedz.css';
import '../../css/z/z0f2gwbfj.css';
import '../../css/t/t7iq7bbbg.css';
import '../../css/u/u1_6bpb2f.css';
import '../../css/g/gr0rj4wlt.css';
import '../../css/e/ejkcxrb6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kw-auxedz"/><path class="z0f2gwbfj"/><path class="t7iq7bbbg"/><path class="u1_6bpb2f"/><path class="gr0rj4wlt"/><path class="ejkcxrb6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-collapse-outline"} {...others} />);
}

export default Component;
