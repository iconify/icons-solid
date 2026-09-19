import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/grc9tmbtv.css';
import '../../css/q/qi-z61bjd.css';
import '../../css/g/goueu-bkx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="grc9tmbtv"/><path clip-rule="evenodd" class="qi-z61bjd"/><path clip-rule="evenodd" class="goueu-bkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:user-circle-bold"} {...others} />);
}

export default Component;
