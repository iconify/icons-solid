import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lkzw9u2tc.css';
import '../../css/b/bg5s2xb2o.css';
import '../../css/u/ui7z5xbyc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lkzw9u2tc"/><path clip-rule="evenodd" class="bg5s2xb2o"/><path class="ui7z5xbyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:document-magnifying-glass-solid"} {...others} />);
}

export default Component;
